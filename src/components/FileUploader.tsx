import React, { useState } from "react";

const FileUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleRemove = () => {
    setFile(null);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0] || null;
    setFile(newFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert(
        "Nenhum arquivo selecionado. Por favor, selecione um arquivo antes de enviar."
      );
    } else {
      const confirmUploader = window.confirm(
        `tem certeza que quer enviar o arquivo ${file.name}`
      );
      if (confirmUploader) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch("https://barcos-backend.onrender.com/uploadOTA", {
          method: "POST",
          body: formData,
        });
        console.log(response);
      }
    }
  };

  return (
    <div className="flex flex-center h-screen w-full items-center justify-center py-2 ">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        accept=".bin"
      />
      <label htmlFor="fileInput" className="file-input">
        Selecionar Arquivo
      </label>
      {file && (
        <div className="file-border">
          <span>{file.name}</span>
          <button onClick={handleRemove} className="file-remove">
            Remover
          </button>
        </div>
      )}
      <button onClick={handleSubmit} className="file-button">
        Enviar
      </button>
    </div>
  );
};

export default FileUploader;
