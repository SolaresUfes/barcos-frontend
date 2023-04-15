import React from "react";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("@carbon/charts-react").then((mod) => mod.LineChart), { ssr: false });
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { transformData } from "@/utils/chart";
import { DadosBarco } from "@/types/ChartData";


interface LineChartComponentProps {
  dadosBarco: DadosBarco[];
}

export function Chart({ dadosBarco = [] }: LineChartComponentProps) {
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
    animations: false,
    height: "400px",
  };

  if(data == undefined) return null;

  return (
    <div className="w-full h-full">
      {dadosBarco.length > 0 && <LineChart data={data} options={options as any} />}
    </div>
  );
};