import { DadosBarco } from "@/types/ChartData";

export function formatDataChat(dataArray: DadosBarco[]): string {
  // Adiciona cabeçalho
  let result = 'correnteMotor,correnteBaterias,temperatura,umidade,tensaoAlimentacaoPCB,estadoStringSolar1,estadoStringSolar2,tensaoSaidaMPPT,tensaoEntradaMPPT,correnteMPPT,updateAt,velocidadeBarco\n';

  // Adiciona cada objeto do array
  dataArray.forEach(data => {
    result += `${data.correnteMotor},${data.correnteBaterias},${data.temperatura},${data.umidade},${data.tensaoAlimentacaoPCB},${data.estadoStringSolar1},${data.estadoStringSolar2},${data.tensaoSaidaMPPT},${data.tensaoEntradaMPPT},${data.correnteMPPT},${data.updateAt},${data.velocidadeBarco || ''}\n`;
  });

  return result;
}