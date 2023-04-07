import { CardDisplayData } from "@/components/CardDisplayData";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <div className='flex bg-slate-200 w-full flex-col items-center justify-center min-h-screen py-2 gap-4'>
      <iframe
        src="https://dsbrastreio.com.br/"
        width="100%"
        height="400px"
        className="rounded-lg shadow-lg max-w-[1400px]"
      />
      <div className='flex flex-row items-center justify-center w-full h-[500px] max-w-[1400px] gap-4'>
        <div className='w-3/4 h-full'>
          <CardDisplayData
            correnteMotor="80.5"
            correnteBaterias="90.0"
            temperatura="30.0"
            umidade="70"
            velocidadeBarco="8.12"
            tensaoAlimentacaoPCB="12"
            estadoStringSolar1="1"
            estadoStringSolar2="0"
            tensaoSaidaMPPT="48"
            tensaoEntradaMPPT="50"
            correnteMPPT="20"
            updateAt="07/04/2023 19:27:12"
          />
        </div>
        <div className='w-full h-full'>
          <Chart />
        </div>
      </div>
      
    </div>      
  )
}
