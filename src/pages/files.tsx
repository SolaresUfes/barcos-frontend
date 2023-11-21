import React, { useEffect, useState } from "react";
import { deleteFile, getFile } from "@/firebase/functions/storage";
import { AiOutlineDownload, AiOutlineDelete, AiOutlineBarChart } from "react-icons/ai";
import { orderBy } from "lodash";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { getAllInfoCollection, removeInfoCollection, updateDocument } from "@/firebase/functions/firestore";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { BsChatSquareTextFill } from "react-icons/bs";


export default function Files() {
  const [files, setFiles] = useState<any>([]);
  const [descricao, setDescricao] = useState<string>('');
  const [fileId, setFileId] = useState<string | null>();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (file: any) => {
    setDescricao(file.descricao);
    setFileId(file.ID);
    setOpen(true);
  };

  const handleCancelar = () => {
    setOpen(false);
    setDescricao('');
    setFileId(null);
  };

  async function handleAtualizar(){
    await updateDocument("files", fileId as string, { descricao: descricao });
    files.filter((f: any) => f.ID === fileId)[0].descricao = descricao;
    setOpen(false);
  };
  
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

  async function handleDeleteFile(file: any) {
    await deleteFile(file.nomeArquivoStorage);
    await removeInfoCollection("files", file.ID);
    setFiles(files.filter((f: any) => f.ID !== file.ID));
  }

  useEffect(() => {
    async function getNameOfFiles() {

      // const result = await listFiles();

      const arquivosBanco = await getAllInfoCollection("files");

      if (arquivosBanco) {
        const arquivosOrdenados = orderBy(
          arquivosBanco,
          (f: any) => {
            const stringData = f.nomeArquivoStorage.split(".")[0];
            const [dia, mes, anoHora] = stringData.split("-");
            const [ano, horario] = anoHora.split(" ");
            const data = new Date(`${ano}-${mes}-${dia}T${horario}`);

            return data;
          },
          "desc"
        );

        setFiles(arquivosOrdenados);
      }
    }
    getNameOfFiles();
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>, file: any, index: number) => {
    const value = e.target.value;

    const updatedFiles = [...files];
    updatedFiles[index].tipo = value;
    setFiles(updatedFiles);

    await updateDocument("files", file.ID, {tipo: value})
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center py-2">
      <div>
        <ThemeToggle />
      </div>
      <div className="mb-4">
        <span>ARQUIVOS DO HISTÓRICO</span>
      </div>
      <div className="h-[70%] overflow-auto shadow-2xl shadow-gray-500 p-7">
        {files.map((file: any, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 gap-4"
          >
            <div className="flex space-x-2 align-middle m-0 p-0">
              <span>{file.nomeArquivoStorage}</span>
              <select
                id="dropdown"
                value={file.tipo}
                onChange={(event) => handleChange(event, file, index)}
              >
                <option value=""></option>
                <option value="ProvaLonga">Prova Longa</option>
                <option value="ProvaCurta">Prova Curta</option>
              </select>
            </div>
            <div>
              <button
                className="bg-gray-700 text-white px-2 py-1 mr-2 rounded"
                title="Descrição"
                onClick={() => handleClickOpen(file)}
              >
                <BsChatSquareTextFill />
              </button>
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => handleDownloadFile(file.nomeArquivoStorage)}
                title="Baixar arquivo"
              >
                <AiOutlineDownload />
              </button>
              <button className="bg-green-500 text-white px-2 py-1 mr-2 rounded">
                <Link
                  href={{
                    pathname: "/relatorios",
                    query: { file: file.nomeArquivoStorage },
                  }}
                  title={"Ver relatório"}
                >
                  <AiOutlineBarChart />
                </Link>
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
      <React.Fragment>
        <Dialog open={open} onClose={handleCancelar}>
          <DialogTitle>Descrição</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ p: 2, width: 350 }}>
              <TextField
                autoFocus
                margin="dense"
                multiline
                // label="Email Address"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                fullWidth
                variant="standard"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelar}>Cancelar</Button>
            <Button onClick={handleAtualizar}>Atualizar</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}