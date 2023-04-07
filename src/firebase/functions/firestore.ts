import { addDoc, collection, doc, getDocs, deleteDoc, query, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../index";

export async function getAllInfoCollection(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot?.docs?.map(doc => ({...doc.data(), ID: doc.id}));
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllInfoCollectionRealTime(collectionName: string, setData: any) {
  const q = query(collection(db, collectionName));
  onSnapshot(q, (querySnapshot) => {
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), ID: doc.id });
    });
    setData(data);
  });
}

export async function saveInfoCollection(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    // console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateInfoCollection(collectionName: string, ID: string, data: any) {
  try {
    await setDoc(doc(db, collectionName, ID), data);
    console.log("Document successfully updated!");
    return true;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export async function removeInfoCollection(collectionName: string, ID: string) {
  try {
    await deleteDoc(doc(db, collectionName, ID));
    console.log("Document successfully deleted!");
    return true;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}