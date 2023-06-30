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
}

export function CardDisplayData({
  correnteMotor = '0',
  correnteBaterias = '0',
  temperatura = '0',
  umidade = '0',
  tensaoAlimentacaoPCB = '0',
  velocidade = '0',
  estadoStringSolar1 = 'OFF',
  estadoStringSolar2 = 'OFF',
  tensaoSaidaMPPT = '0',
  tensaoEntradaMPPT = '0',
  correnteMPPT = '0',
  updateAt = '0',
}: CardDisplayDataProps) {
  const dataItems = [
    { label: 'Corrente Motor', value: correnteMotor, unit: 'A' },
    { label: 'Corrente Baterias', value: correnteBaterias, unit: 'A' },
    { label: 'Corrente MPPT', value: correnteMPPT, unit: 'A' },
    { label: 'Tensão Alimentação PCB', value: tensaoAlimentacaoPCB, unit: 'V' },
    { label: 'Tensão Entrada MPPT', value: tensaoEntradaMPPT, unit: 'V' },
    { label: 'Tensão Saída MPPT', value: tensaoSaidaMPPT, unit: 'V' },
    { label: 'Velocidade Barco', value: velocidade, unit: 'nós' },
    { label: 'Estado String Solar 1', value: estadoStringSolar1, unit: '' },
    { label: 'Estado String Solar 2', value: estadoStringSolar2, unit: '' },
    { label: 'Temperatura', value: temperatura, unit: '°C' },
    { label: 'Umidade', value: umidade, unit: '%' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {dataItems?.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-md text-center flex flex-col items-center justify-center"
        >
          <h3 className={`text-xl lg:text-3xl font-bold ${item.value === 'ON' ? 'text-green-500' : item.value === 'OFF' ? 'text-red-500' : 'text-black'}`}>
            {(item.value === 'ON' || item.value === 'OFF') ? item.value : parseFloat(item?.value!).toFixed(2)} {item.unit}
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
