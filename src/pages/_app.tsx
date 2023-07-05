import { Sidebar } from "@/components/Sidebar";
import { auth } from "@/firebase";
import { handleSubmitLoginGoogle } from "@/firebase/functions/auth";
import { menus } from "@/routes";
import socket from "@/services/socketio";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { getAllInfoCollection } from "../firebase/functions/firestore";
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }: AppProps) {
  const [recordStatus, setRecordStatus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [erroAutenticacao, setErroAutenticacao] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const autorizatedUsers = await getAllInfoCollection("users");
        const userIsAutorizated = autorizatedUsers?.find((userAutorizated: any) => userAutorizated.email === user?.email);
  
        if (userIsAutorizated) {
         setIsAuthenticated(true);
         setErroAutenticacao(false);
        } else {
          setErroAutenticacao(true);
        }
      }
    });
    socket.on("recordStatus", (status: boolean) => {
      setRecordStatus(status);
    });
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full">
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col space-y-3">
            <button
              className="bg-white text-black px-4 py-2 rounded-md shadow-md"
              onClick={handleSubmitLoginGoogle}
            >
              <span className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                  className="w-6 h-6 mr-2"
                />
                
                Entrar com o Google
              </span>
            </button>
            {erroAutenticacao && <span className="flex items-center justify-center text-red-600 font-bold">Usuário não cadastrado!</span>}
          </div>
        </div>
        <div className="h-full hidden md:flex md:flex-col w-full bg-[#050758]  items-center justify-center">
          <img
            src="https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/550/364550/v9bPQxy0/cfcafd65777e43dcacfbf8df13381dba"
            width="80%"
            height="50%"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar
        display={true}
        menus={menus}
        isRecord={recordStatus}
        setIsRecord={() => {
          socket.emit("record");
        }}
      />
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

    </div>
  );
}
