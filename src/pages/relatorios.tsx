import { listFiles } from "@/firebase/functions/storage";
import { orderBy } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Relatorios() {
  const [files, setFiles] = useState<any>([]);
  const searchParams = useSearchParams();
	const [selectedOption, setSelectedOption] = useState<string>("");
	const router = useRouter();
	const file = searchParams.get("file") as string;


	useEffect(() => { 
		setSelectedOption(file);
	}, [])

  useEffect(() => {
    async function getNameOfFiles() {
      const result = await listFiles();
      if (result !== undefined) {
        const arquivosOrdenados = orderBy(
          result,
          (f) => {
            const date = new Date(f.split(".")[0]);
            const dataPtBR = new Date(date.toLocaleString("pt-BR"));
            return dataPtBR;
          },
          "desc"
        );

        setFiles(arquivosOrdenados);
      }
    }
    getNameOfFiles();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    router.push("", undefined);
  };

	return (
    <div className="flex flex-col h-screen w-full  py-8">
      <div className="flex justify-center">
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="Nenhum">Nenhum</option>
          {files.map((file: string, index: number) => (
            <option key={file} value={file}>
              {file}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
