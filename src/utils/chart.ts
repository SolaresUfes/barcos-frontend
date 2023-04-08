import { DadosBarco } from "@/types/ChartData";

export const transformData = (dadosBarco: DadosBarco[]) => {
  const dados = dadosBarco.flatMap((item, index) => {
    // item.updateAt = "07/04/2023 21:57:23" get only 21:57:23
    const time = item.updateAt.split(" ")[1];
    return [
      {
        group: "Corrente Motor",
        key: time,
        value: parseFloat(item.correnteMotor),
      },
      {
        group: "Corrente Baterias",
        key: time,
        value: parseFloat(item.correnteBaterias),
      },
      {
        group: "Corrente MPPT",
        key: time,
        value: parseFloat(item.correnteMPPT),
      },
      {
        group: "Tensão Alimentação PCB",
        key: time,
        value: parseFloat(item.tensaoAlimentacaoPCB),
      },
      {
        group: "Tensão Entrada MPPT",
        key: time,
        value: parseFloat(item.tensaoEntradaMPPT),
      },
      {
        group: "Tensão Saída MPPT",
        key: time,
        value: parseFloat(item.tensaoSaidaMPPT),
      },
      {
        group: "Velocidade Barco",
        key: time,
        value: parseFloat(item.velocidadeBarco || "0"),
      },
    ];
  }).filter(item => !isNaN(item.value));

  return dados;
};