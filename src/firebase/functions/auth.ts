import { auth } from "../index";
import { 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getAllInfoCollection } from "./firestore";

const provider = new GoogleAuthProvider();

export async function handleSubmitLoginGoogle() {
  signInWithPopup(auth, provider)
  .then( async (result) => {
    const user = result.user;
    const autorizatedUsers = await getAllInfoCollection("users");
    const userIsAutorizated = autorizatedUsers?.find((userAutorizated: any) => userAutorizated.email === user?.email);
    if (userIsAutorizated) {
      console.log("Usuário autorizado!");
    }
    else {
      console.log("Usuário não autorizado!");
      await handleLogout();
      window.location.reload();
    }
  }).catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}

export async function handleLogout() {
  auth.signOut();
}

export async function handleSubmitSignUp(email: string, password: string) {
  const result = createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log("Usuário registrado com sucesso!");
      return true;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      return false;
    });
  return result;
}