/* eslint-disable react/prop-types */
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
const GraficoReclamoEstadoYOficina = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const labels = data.resultSearch[0]?.map((oficina) => oficina.nombre_oficina);

  const options = {
    maintainAspectRatio: false,
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

  const datasets = [
    {
      label: "INICIADO",
      // eslint-disable-next-line react/prop-types
      data: data.resultSearch[0]?.map((oficina) => oficina.INICIADO),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "FINALIZADO",
      // eslint-disable-next-line react/prop-types
      data: data.resultSearch[0]?.map((oficina) => oficina.FINALIZADO),
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    // Puedes añadir más datasets según los estados que quieras mostrar
  ];

  const chartData = { labels, datasets };

  return (
    <div className="LayoutHeight w-100">
      <>
        {data.resultSearch[0]?.length !== 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <GraficoBarraEsqueleto />
        )}
      </>
    </div>
  );
};

export default GraficoReclamoEstadoYOficina;
