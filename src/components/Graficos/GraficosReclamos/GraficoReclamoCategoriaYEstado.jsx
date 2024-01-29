import { useEffect, useState } from "react";
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
import { Bar, Pie } from "react-chartjs-2";
import { formatearFecha } from "../../../helpers/convertirFecha";
import { getRandomColor } from "../../../helpers/getRandomColor";
import GraficoBarraEsqueleto from "../../Esqueletos/GraficoBarraEsqueleto";
import GraficoPieEsqueleto from "../../Esqueletos/GraficoPieEsqueleto";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
const GraficoReclamoCategoriaYEstado = ({ data }) => {
  const [categorias, setCategorias] = useState([]);

  const [categoriaSelected, setCategoriaSelected] = useState("todas");

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const categoriasSP = data.resultSearch[0].map(
      (cat) => cat.nombre_categoria
    );
    const categoriasSinRepetidos = [...new Set(categoriasSP)];
    setCategorias(categoriasSinRepetidos);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
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
    labels: data.resultSearch[0]
      // eslint-disable-next-line react/prop-types
      .filter((elemento) => elemento.nombre_categoria === categoriaSelected)
      .map((elemento) => elemento.descripcion),
    datasets: [
      {
        label: "Cantidad de Reclamos por Categoria",
        // eslint-disable-next-line react/prop-types
        data: data.resultSearch[0]
          // eslint-disable-next-line react/prop-types
          ?.filter((cat) => cat.nombre_categoria == categoriaSelected)
          .map((elemento) => elemento.cantidad),
        backgroundColor: getRandomColor(),
      },
    ],
  };

  const datasets = [
    {
      label: "INICIADO",
      // eslint-disable-next-line react/prop-types
      data: data.resultSearch[0]
        // eslint-disable-next-line react/prop-types
        ?.filter((e) => e.descripcion == "INICIADO")
        .map((cat) => cat.cantidad),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "FINALIZADO",
      // eslint-disable-next-line react/prop-types
      data: data.resultSearch[0]
        // eslint-disable-next-line react/prop-types
        ?.filter((e) => e.descripcion == "FINALIZADO")
        .map((cat) => cat.cantidad),
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    // Puedes añadir más datasets según los estados que quieras mostrar
  ];
  console.log(data);
  const chartData = { labels: categorias, datasets };

  return (
    <div className="d-flex  flex-column container">
      <div>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel>Categorias</InputLabel>
          <Select
            labelId="categoria"
            value={categoriaSelected}
            label="Categorias"
            autoWidth
            onChange={(e) => setCategoriaSelected(e.target.value)}
          >
            <MenuItem selected value="todas">
              Todas
            </MenuItem>
            {categorias.length > 0 ? (
              categorias.map(
                (
                  cat,
                  index // Agregué un índice para las keys en elementos iterados
                ) => (
                  <MenuItem key={index} value={cat}>
                    {cat}
                  </MenuItem>
                )
              )
            ) : (
              <MenuItem disabled>No hay categorías disponibles</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>

      {categoriaSelected != "todas" ? (
        <>
          {categoriaSelected != "todas" ? (
            <div className="LayoutHeight2 d-flex justify-content-center w-100 ">
              <Pie data={dataPorCategoriasYestados} options={options} />
            </div>
          ) : (
            <GraficoPieEsqueleto />
          )}
        </>
      ) : (
        <>
          {categorias.length !== 0 ? (
            <div className="LayoutHeight2 w-100 ">
              <Bar data={chartData} options={options} />
            </div>
          ) : (
            <GraficoBarraEsqueleto />
          )}
        </>
      )}
    </div>
  );
};

export default GraficoReclamoCategoriaYEstado;

{
  /*  */
}
