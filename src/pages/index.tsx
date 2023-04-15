import { CardDisplayData } from "@/components/CardDisplayData";
import { Chart } from "@/components/Chart";
// import { dadosBarco } from "@/mock/dados";
import socket from "@/services/socketio";
import { DadosBarco } from "@/types/ChartData";
import { useEffect, useState } from "react";

export default function Home() {
  const [dadoAtualBarco, setDadoAtualBarco] = useState<DadosBarco | undefined>(undefined);
  const [dadosBarco, setDadosBarco] = useState<DadosBarco[]>([]);

  useEffect(() => {
    socket.on('info', (dados: DadosBarco) => {
      // console.log(dados);
      setDadoAtualBarco(dados);
      setDadosBarco((old) => [...old, dados].slice(-50)); // Limita o tamanho do array a 25 elementos
    });
  }, [])

  return (
    <div className='flex w-full flex-col items-center justify-center min-h-screen p-4 gap-4 overflow-y-auto'>
      <iframe
        src="https://dsbrastreio.com.br/"
        width="100%"
        height="50%"
        className="rounded-lg shadow-lg w-full min-h-[350px]"
      />
      <div className='flex flex-col xl:flex-row items-center justify-center w-full h-auto gap-4'>
        <div className='w-full md:w-3/4 h-full md:h-full'>
          <CardDisplayData
            {...dadoAtualBarco}
            estadoStringSolar1={dadoAtualBarco?.estadoStringSolar1 == "1" ? 'ON' : 'OFF'}
            estadoStringSolar2={dadoAtualBarco?.estadoStringSolar2 == "1" ? 'ON' : 'OFF'}
          />
        </div>
        <div className='w-full md:h-full mt-4 md:mt-0'>
          {dadosBarco && <Chart dadosBarco={dadosBarco} />}
        </div>
      </div>
    </div>      
  )
}
