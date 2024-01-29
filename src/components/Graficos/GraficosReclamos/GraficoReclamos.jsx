import "./GraficoReclamos.css";
import GraficoReclamoCategoria from "./GraficoReclamoCategoria";
import GraficoReclamoEstados from "./GraficoReclamoEstados";
import GraficoReclamoPorOrigen from "./GraficoReclamoPorOrigen";
import GraficoReclamoCategoriaYEstado from "./GraficoReclamoCategoriaYEstado";
import GraficoReclamoEstadoYOficina from "./GraficoReclamoEstadoYOficina";
import GraficoReclamoDeriva from "./GraficoReclamoDeriva";
import useStore from "../../../Zustand/Zustand";

const GraficoReclamos = () => {
  const { resultSearch, valuesGraficos } = useStore();

  const data = { resultSearch, values: valuesGraficos };

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center containerGrafico mb-4">
      <div className="d-flex container h-100">
        {valuesGraficos.procedimiento.includes("origen") ? (
          <GraficoReclamoPorOrigen data={data} />
        ) : valuesGraficos.procedimiento.includes(
            "sp_reclamos_por_categoria_estado"
          ) ? (
          <GraficoReclamoCategoriaYEstado data={data} />
        ) : valuesGraficos.procedimiento.includes(
            "sp_reclamos_por_estado_sec_repar_oficina_cuadro"
          ) ? (
          <GraficoReclamoEstadoYOficina data={data} />
        ) : valuesGraficos.procedimiento.includes("categoria") ? (
          <GraficoReclamoCategoria data={data} />
        ) : valuesGraficos.procedimiento.includes("estados") ? (
          <GraficoReclamoEstados data={data} />
        ) : valuesGraficos.procedimiento.includes("deriva") ? (
          <GraficoReclamoDeriva data={data} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default GraficoReclamos;
