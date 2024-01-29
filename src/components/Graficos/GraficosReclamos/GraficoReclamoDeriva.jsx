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
import "./GraficoReclamos.css";
import { Pie } from "react-chartjs-2";
import { formatearFecha } from "../../../helpers/convertirFecha";
import { getRandomColor } from "../../../helpers/getRandomColor";
import { useEffect, useState } from "react";
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

// eslint-disable-next-line react/prop-types
const GraficoReclamoDeriva = ({ data }) => {
  const [reparticiones, setReparticiones] = useState([]);
  const [grafico2, setGrafico2] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const reparticionesSP = data.resultSearch[0].map(
      (rep) => rep.nombre_reparti
    );

    const reparticionesSinRepetidos = [...new Set(reparticionesSP)];

    setReparticiones(reparticionesSinRepetidos.filter((rep) => rep != null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/prop-types
  const result = data.resultSearch[0]?.reduce((acc, current) => {
    if (current.nombre_reparti !== null) {
      const existingItem = acc.find(
        (item) => item.nombre_reparti === current.nombre_reparti
      );
      if (existingItem) {
        existingItem.Cantidad += current.Cantidad;
      } else {
        acc.push({ ...current });
      }
    }
    return acc;
  }, []);

  const options = {
    maintainAspectRatio: true,

    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // eslint-disable-next-line react/prop-types
        text: `${formatearFecha(data.values.desde)} - ${formatearFecha(
          // eslint-disable-next-line react/prop-types
          data.values.hasta
        )}`,
      },
    },
  };
  const dataDeriva = {
    labels: reparticiones,
    datasets: [
      {
        label: "Cantidad de Reclamos",
        // eslint-disable-next-line react/prop-types
        data: result.map((elemento) => elemento.Cantidad),
        backgroundColor: getRandomColor(),
      },
    ],
  };

  // eslint-disable-next-line react/prop-types
  const oficinasFiltradas = data.resultSearch[0].filter(
    (oficina) => oficina.nombre_reparti === grafico2
  );

  const dataDerivaOficina = {
    labels: oficinasFiltradas.map((o) => o.nombre_oficina),
    datasets: [
      {
        label: "Cantidad de Reclamos",
        // eslint-disable-next-line react/prop-types
        data: oficinasFiltradas.map((elemento) => elemento.Cantidad),
        backgroundColor: getRandomColor(),
      },
    ],
  };

  const handleClick = (elements) => {
    if (elements.length > 0) {
      // Aquí puedes realizar alguna acción con la porción del gráfico seleccionada
      const selectedIndex = elements[0].index;

      setGrafico2(dataDeriva.labels[selectedIndex]);
    }
  };

  return (
    <>
      {data.resultSearch[0].length !== 0? (
        <div
          className={
            grafico2 != ""
              ? " LayoutHeight seleccionado container"
              : "LayoutHeight noSeleccionado container"
          }
        >
          <Pie
            data={dataDeriva}
            options={{
              options,
              onClick: (evt, elements) => handleClick(elements),
            }}
          />
          {grafico2 != "" ? (
            <Pie data={dataDerivaOficina} options={options} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <GraficoPieEsqueleto />
      )}
    </>
  );
};

export default GraficoReclamoDeriva;
