export interface DadosBarco {
  correnteMotor: string;
  correnteBaterias: string;
  temperatura: string;
  umidade: string;
  tensaoAlimentacaoPCB: string;
  estadoStringSolar1: string;
  estadoStringSolar2: string;
  tensaoSaidaMPPT: string;
  tensaoEntradaMPPT: string;
  correnteMPPT: string;
  velocidadeBarco?: string;
  updateAt: string;
  //potenciaSaidaMPPT?:string;
  //potenciaEntradaMPPT?:string;
  //potenciaMotor?:string;
  //potenciaBateria?:string;

  //potenciaSaidaMPPT= correnteMPPT * tensaoSaidaMPPT,
  //potenciaEntradaMPPT= correnteMPPT * tensaoEntradaMPPT,
  //potenciaMotor  = correnteMotor * tensaoSaidaMPPT,
 // potenciaBateria = correnteBaterias * tensaoSaidaMPPT,
}


export interface ChartData {
  group: string;
  key: string;
  value: number;
}