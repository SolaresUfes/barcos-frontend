import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { transformData } from "@/utils/chart";
import { DadosBarco } from "@/types/ChartData";


interface LineChartComponentProps {
  dadosBarco: DadosBarco[];
}

export function Chart({ dadosBarco }: LineChartComponentProps) {
  const data = transformData(dadosBarco)

  const options = {
    title: "Dados do Barco",
    axes: {
      bottom: {
        title: "Medições",
        mapsTo: "key",
        scaleType: "labels",
      },
      left: {
        mapsTo: "value",
        title: "Valores",
        scaleType: "linear",
      },
    },
    height: "400px",
  };

  if(data == undefined) return null;

  return (
    <div className="w-full h-full">
      <LineChart data={data} options={options as any} />
    </div>
  );
};