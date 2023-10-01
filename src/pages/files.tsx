import React, { useEffect, useState } from "react";
import { deleteFile, getFile, listFiles } from "@/firebase/functions/storage";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import ThemeToggle from "@/components/ThemeToggle";

export default function Files() {
  const [files, setFiles] = useState<any>([]);

  async function handleDownloadFile(fileName: string) {
    const result = await getFile(fileName);
    console.log(result);
    if (result !== undefined) {
      const response = await fetch(result);
      console.log(response);
      const data = await response.text();
      const element = document.createElement("a");
      const file = new Blob([data], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element);
      element.click();
    }
  }

  async function handleDeleteFile(fileName: string) {
    await deleteFile(fileName);
    setFiles(files.filter((file: string) => file !== fileName));
  }

  useEffect(() => {
    async function getNameOfFiles() {
      const result = await listFiles();
      if (result !== undefined) {
        console.log(result);
        setFiles(result);
      }
    }
    getNameOfFiles();
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center py-2">
      <div>
        <ThemeToggle />
      </div>
      <div>
        {files.map((file: string, index: number) => (
          <div key={index} className="flex justify-between items-center mb-2 gap-4">
            <span>{file}</span>
            <div>
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => handleDownloadFile(file)}
                title="Baixar arquivo"
              >
                <AiOutlineDownload />
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteFile(file)}
                title="Deletar arquivo"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
