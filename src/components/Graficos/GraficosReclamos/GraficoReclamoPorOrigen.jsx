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
const GraficoReclamoPorOrigen = ({ data }) => {
  console.log(data);

  // eslint-disable-next-line react/prop-types
  const labels = data.resultSearch[0]?.map(
    (oficina) => oficina.nombre_oreclamo
  );

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

  const dataPorOrigen = {
    labels,
    datasets: [
      {
        label: "Cantidad de Reclamos por Origen",
        // eslint-disable-next-line react/prop-types
        data: data.resultSearch[0]?.map((elemento) => elemento.cantidad),
        backgroundColor: getRandomColor(),
      },
    ],
  };

  return (
    <>
      <>
        {data.resultSearch[0].length !== 0 ? (
          <div className="LayoutHeight d-flex justify-content-center w-100">
            <Pie data={dataPorOrigen} options={options} />
          </div>
        ) : (
          <GraficoPieEsqueleto />
        )}
      </>
      {/* {data.resultSeatch[0]?.length !== 0 ? ( */}
      {/* ) : ( */}
      {/* <> */}
      {/* <div className="layoutHeight d-flex justify-content-center align-items-end pt-4 "> */}
      {/* <Spinner variant="light" /> */}

      {/* {Array.from({ length: 12 }).map(() => (
        <tr className="h-50 pb-0 ">

        <td className="pe-2" >
            <SkeletonTheme baseColor="#202020" highlightColor="blue" className=" d-flex align-items-end">
              <Skeleton height={Math.floor(Math.random()*500)} width={"10vh"}/>
            </SkeletonTheme>
          </td>
      
      </tr>
        ))} */}
      {/* </div > */}
      {/* </> */}
      {/* )} */}
    </>
  );
};

export default GraficoReclamoPorOrigen;
