import React from "react";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("@carbon/charts-react").then((mod) => mod.LineChart), { ssr: false });
import { ScaleTypes } from "@carbon/charts/interfaces"; // Adicionado
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";

interface LineChartComponentProps {
  data: {
    group: string;
    key: string;
    value: number;
  }[];
}

export function Chart({ data = [] }: LineChartComponentProps) {

  const options = {
    title: "Dados do Barco",
    axes: {
      bottom: {
        title: "Medições",
        mapsTo: "key",
        scaleType: "labels" as ScaleTypes, // Modificado
      },
      left: {
        mapsTo: "value",
        title: "Valores",
        scaleType: "linear" as ScaleTypes, // Modificado
      },
    },
    animations: false,
    height: "400px",
    data: {
      loading: data.length === 0,
    },
    color: {
      scale: {
        "Corrente Motor": "#744fff",
        "Corrente Baterias": "#ff9149",
        // Terminar de colocar as cores aqui
      }
    }
  };

  if(data == undefined) return null;

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg p-4">
      <LineChart data={data} options={options} />
    </div>
  );
};
