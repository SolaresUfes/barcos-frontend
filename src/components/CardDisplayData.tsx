import React from 'react';

interface CardDisplayDataProps {
  correnteMotor?: string;
  correnteBaterias?: string;
  temperatura?: string;
  umidade?: string;
  tensaoAlimentacaoPCB?: string;
  velocidade?: string;
  estadoStringSolar1?: string;
  estadoStringSolar2?: string;
  tensaoSaidaMPPT?: string;
  tensaoEntradaMPPT?: string;
  correnteMPPT?: string;
  updateAt?: string;
  potenciaSaidaMPPT?:string;
  potenciaEntradaMPPT?:string;
  potenciaMotor?:string;
  potenciaBateria?:string;

}

export function CardDisplayData({
  correnteMotor = '0',
  correnteBaterias = '0',
  temperatura = '0',
  umidade = '0',
  tensaoAlimentacaoPCB = '0',
  velocidade = '0',
  estadoStringSolar1 = '0',
  estadoStringSolar2 = '0',
  tensaoSaidaMPPT = '0',
  tensaoEntradaMPPT = '0',
  correnteMPPT = '0',
  updateAt = '0',
  potenciaSaidaMPPT = (parseFloat(correnteMPPT) * parseFloat(tensaoSaidaMPPT)).toString(),
  potenciaEntradaMPPT = (parseFloat(correnteMPPT) * parseFloat(tensaoEntradaMPPT)).toString(),
  potenciaMotor = (parseFloat(correnteMotor) * parseFloat(tensaoSaidaMPPT)).toString(),
  potenciaBateria = (parseFloat(correnteBaterias) * parseFloat(tensaoSaidaMPPT)).toString(),
  
  

}: CardDisplayDataProps) {
  const dataItems = [
    { label: 'Corrente Motor', value: correnteMotor, unit: 'A' },
    { label: 'Corrente Baterias', value: correnteBaterias, unit: 'A' },
    { label: 'Corrente MPPT', value: correnteMPPT, unit: 'A' },
    { label: 'Tensão Alimentação PCB', value: tensaoAlimentacaoPCB, unit: 'V' },
    { label: 'Tensão Entrada MPPT', value: tensaoEntradaMPPT, unit: 'V' },
    { label: 'Tensão Saída MPPT', value: tensaoSaidaMPPT, unit: 'V' },
    { label: 'Velocidade Barco', value: velocidade, unit: 'nós' },
    { label: 'Estado String Solar 1', value: estadoStringSolar1, unit: 'A' },
    { label: 'Estado String Solar 2', value: estadoStringSolar2, unit: 'A' },
    { label: 'Temperatura', value: temperatura, unit: '°C' },
    { label: 'Umidade', value: umidade, unit: '%' },
    { label: 'Potência Entregue pela Geração', value: potenciaSaidaMPPT, unit: 'W' },
    { label: 'Potência Bruta Gerada', value: potenciaEntradaMPPT, unit: 'W' },
    { label: 'Potência do Motor', value: potenciaMotor, unit: 'W' },
    { label: 'Potência da Bateria', value: potenciaBateria, unit: 'W' },


  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {dataItems?.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-md text-center flex flex-col items-center justify-center"
        >
          <h3 className={`text-xl lg:text-3xl font-bold text-black`}>
            {parseFloat(item?.value!).toFixed(2)} {item.unit}
          </h3>

          <p className="text-gray-900 text-[10px] lg:text-sm" >{item.label}</p>
        </div>
      ))}
      <p className="col-span-3 text-center text-sm">
        <span className="font-bold">Última atualização: </span>
        {updateAt}
      </p>
    </div>
  );
}
