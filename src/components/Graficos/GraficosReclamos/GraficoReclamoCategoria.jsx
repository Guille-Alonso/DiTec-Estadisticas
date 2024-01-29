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
import { Bar } from "react-chartjs-2";
import { formatearFecha } from "../../../helpers/convertirFecha";
import GraficoBarraEsqueleto from "../../Esqueletos/GraficoBarraEsqueleto";

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
const GraficoReclamoCategoria = ({ data }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reclamos por Categoría",
      },
    },
  };

  const labels = [
    // eslint-disable-next-line no-unused-vars, react/prop-types
    `${formatearFecha(data.values.desde)} - ${formatearFecha(
      // eslint-disable-next-line react/prop-types
      data.values.hasta
    )}`,
  ];

  const dataCategoria = {
    labels,
    // eslint-disable-next-line no-unused-vars, react/prop-types
    datasets: data.resultSearch[0]?.map((categoria, index) => ({
      label: `${categoria.nombre_categoria}`,
      data: labels.map(() => categoria.cantidad),
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`,
    })),
  };

  return (
    // eslint-disable-next-line react/prop-types
    <>
      {data.resultSearch[0]?.length !== 0 ? (
        <div className="w-100">
          <Bar data={dataCategoria} options={options} />
        </div>
      ) : (
        <GraficoBarraEsqueleto />
      )}
    </>
  );
};

export default GraficoReclamoCategoria;
