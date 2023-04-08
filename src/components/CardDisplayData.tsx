import React from 'react';

interface CardDisplayDataProps {
  correnteMotor: string;
  correnteBaterias: string;
  temperatura: string;
  umidade: string;
  tensaoAlimentacaoPCB: string;
  velocidadeBarco?: string;
  estadoStringSolar1: string;
  estadoStringSolar2: string;
  tensaoSaidaMPPT: string;
  tensaoEntradaMPPT: string;
  correnteMPPT: string;
  updateAt: string;
}

export function CardDisplayData({
  correnteMotor,
  correnteBaterias,
  temperatura,
  umidade,
  tensaoAlimentacaoPCB,
  velocidadeBarco,
  estadoStringSolar1,
  estadoStringSolar2,
  tensaoSaidaMPPT,
  tensaoEntradaMPPT,
  correnteMPPT,
  updateAt,
}: CardDisplayDataProps) {
  const dataItems = [
    { label: 'Corrente Motor', value: correnteMotor, unit: 'A' },
    { label: 'Corrente Baterias', value: correnteBaterias, unit: 'A' },
    { label: 'Corrente MPPT', value: correnteMPPT, unit: 'A' },
    { label: 'Tensão Alimentação PCB', value: tensaoAlimentacaoPCB, unit: 'V' },
    { label: 'Tensão Entrada MPPT', value: tensaoEntradaMPPT, unit: 'V' },
    { label: 'Tensão Saída MPPT', value: tensaoSaidaMPPT, unit: 'V' },
    { label: 'Velocidade Barco', value: velocidadeBarco, unit: 'nós' },
    { label: 'Estado String Solar1', value: estadoStringSolar1, unit: '' },
    { label: 'Estado String Solar2', value: estadoStringSolar2, unit: '' },
    { label: 'Temperatura', value: temperatura, unit: '°C' },
    { label: 'Umidade', value: umidade, unit: '%' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-sm shadow-md text-center flex flex-col items-center justify-center"
        >
          {(
            item.label === 'Estado String Solar1' && item.value === '1' 
            || item.label === 'Estado String Solar2' && item.value === '1') 
          ? (
            <p className="text-green-500 text-2xl font-bold">ON</p>
          ):
            (
              item.label === 'Estado String Solar1' || item.label === 'Estado String Solar2' && <p className="text-red-500 text-2xl font-bold">OFF</p>
            )
          }
          {item.label !== 'Estado String Solar1' && item.label !== 'Estado String Solar2' && (
            <p className="font-bold text-2xl">{Number(item.value).toFixed(2)} {item.unit}</p>
          )}
          
          <p className="text-gray-600 text-sm">{item.label}</p>
        </div>
      ))}
      <p className="col-span-3 text-center text-gray-600 text-sm">
        <span className="font-bold">Última atualização: </span>
        {updateAt}
      </p>
    </div>
  );
}
