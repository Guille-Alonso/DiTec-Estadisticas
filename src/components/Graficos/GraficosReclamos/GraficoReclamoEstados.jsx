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
const GraficoReclamoEstados = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const labels = data.resultSearch[0]?.map((oficina) => oficina.nombre_estado);

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
  const dataPorCategoriasYestados = {
    // eslint-disable-next-line react/prop-types
    labels,
    datasets: [
      {
        label: "Cantidad de Reclamos por estado",
        // eslint-disable-next-line react/prop-types
        data: data.resultSearch[0]
          // eslint-disable-next-line react/prop-types
          ?.map((elemento) => elemento.cantidad),
        backgroundColor: getRandomColor(),
      },
    ],
  };
  // const chartData = { labels, datasets };

  return (
    <>
      {data.resultSearch[0]?.length !== 0 ? (
        <div className="LayoutHeight d-flex justify-content-center w-100 ">
          <Pie data={dataPorCategoriasYestados} options={options} />
        </div>
      ) : (
        <GraficoPieEsqueleto />
      )}
    </>
  );
};

export default GraficoReclamoEstados;
