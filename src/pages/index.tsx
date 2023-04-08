import { CardDisplayData } from "@/components/CardDisplayData";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <div className='flex bg-slate-200 w-full flex-col items-center justify-center min-h-screen p-4 gap-4'>
      <iframe
        src="https://dsbrastreio.com.br/"
        width="100%"
        height="50%"
        className="rounded-lg shadow-lg w-full min-h-[350px]"
      />
      <div className='flex flex-col xl:flex-row items-center justify-center w-full h-auto md:h-[500px] gap-4'>
        <div className='w-full md:w-3/4 h-auto md:h-full'>
          <CardDisplayData
            correnteMotor="80.5"
            correnteBaterias="90.0"
            temperatura="30.0"
            umidade="70"
            velocidadeBarco="8.12"
            tensaoAlimentacaoPCB="12"
            estadoStringSolar1={true ? "ON" : "OFF"}
            estadoStringSolar2={false ? "ON" : "OFF"}
            tensaoSaidaMPPT="48"
            tensaoEntradaMPPT="50"
            correnteMPPT="20"
            updateAt="07/04/2023 19:27:12"
          />
        </div>
        <div className='w-full h-auto md:h-full mt-4 md:mt-0'>
          <Chart />
        </div>
      </div>
    </div>      
  )
}
