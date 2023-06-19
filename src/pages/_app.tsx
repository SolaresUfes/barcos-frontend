import { Sidebar } from "@/components/Sidebar";
import { auth } from "@/firebase";
import { handleSubmitLoginGoogle } from "@/firebase/functions/auth";
import { menus } from "@/routes";
import socket from "@/services/socketio";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [recordStatus, setRecordStatus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user)
        setIsAuthenticated(true);
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
        </div>
        <div className="h-full w-full bg-[#050758] flex flex-col items-center justify-center">
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
    <div className="flex bg-slate-100">
      <Sidebar
        display={true}
        menus={menus}
        isRecord={recordStatus}
        setIsRecord={() => {
          socket.emit("record");
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
