import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
// import { getRandomColor } from "../../../helpers/getRandomColor";
import useStore from "../../../Zustand/Zustand";
import GraficoPieEsqueleto from "../../Esqueletos/GraficoPieEsqueleto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const GraficosCapHumanoPlantaPorReparticion = () => {
  const { resultSearch } = useStore();
  const [arrayFiltrado, setArrayFiltrado] = useState([]);

  useEffect(() => {
    const newArray = [];

    if (resultSearch[0].length > 0) {
      resultSearch[0].forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (
            key !== "[[Prototype]]" &&
            key !== "CODI_07" &&
            key !== "DETA_07"
          ) {
            const existingItemIndex = newArray.findIndex(
              (item) => item.nombre === key
            );

            if (existingItemIndex !== -1) {
              // Si el elemento ya existe, sumar la cantidad
              newArray[existingItemIndex].cantidad += obj[key];
            } else {
              // Si el elemento no existe, agregarlo al array
              newArray.push({ nombre: key, cantidad: obj[key] });
            }
          }
        });
      });

      setArrayFiltrado(newArray);
    }
  }, [resultSearch]);

  const data = {
    labels: Object.keys(resultSearch[0][0]).filter(
      (rs) => !rs.includes("CODI") && !rs.includes("DETA")
    ),
    datasets: [
      {
        label: "",
        data: arrayFiltrado.map((rs) => rs.cantidad),
        backgroundColor: ["rgba(255, 182, 193, 0.6)", " rgba(0, 72, 255, 0.8)"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <>
      {resultSearch[0].length != 0 ? (
        <Pie data={data} options={options} />
      ) : (
        <GraficoPieEsqueleto />
      )}
    </>
  );
};

export default GraficosCapHumanoPlantaPorReparticion;
