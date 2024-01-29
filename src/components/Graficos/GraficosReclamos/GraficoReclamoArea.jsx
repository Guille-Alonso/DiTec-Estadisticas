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
import "./Grafico.css";
import { Bar } from "react-chartjs-2";
import { formatearFecha } from "../../helpers/convertirFecha";

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
const GraficoReclamoArea = ({ data }) => {
  const optionsSecretaria = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reclamos por Secretarias",
      },
    },
  };

  const optionsReparticion = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reclamos por Reparticiones",
      },
    },
  };

  const optionsOficina = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reclamos por Oficinas",
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

  const dataSecretaria = {
    labels,
    // eslint-disable-next-line no-unused-vars, react/prop-types
    datasets: data.resultSearch[0]?.map((categoria, index) => ({
      label: `${categoria.secretaria}`,
      data: labels.map(() => categoria.cantidad),
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`,
    })),
  };

  const dataReparticion = {
    labels,
    // eslint-disable-next-line no-unused-vars, react/prop-types
    datasets: data.resultSearch[0].map((categoria, index) => ({
      label: `${categoria.nombre_reparti}`,
      data: labels.map(() => categoria.cantidad),
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`,
    })),
  };

  const dataOficina = {
    labels,
    // eslint-disable-next-line react/prop-types, no-unused-vars
    datasets: data.resultSearch[0].map((categoria, index) => ({
      label: `${categoria.nombre_oficina}`,
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
    <div className=" d-flex flex-column justify-content-center align-items-center w-100 mt-2">
      <div className="d-flex flex-column container gap-3">
        <Bar data={dataSecretaria} options={optionsSecretaria} />
        <Bar data={dataReparticion} options={optionsReparticion} />
        <Bar data={dataOficina} options={optionsOficina} />
      </div>
    </div>
  );
};

export default GraficoReclamoArea;
