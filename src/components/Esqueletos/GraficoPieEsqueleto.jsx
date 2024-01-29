import { Skeleton } from "@mui/material";
import "./GraficoPieEsqueleto.css";

const GraficoPieEsqueleto = () => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center bodyGraf container ">
      <div className=" d-flex  justify-content-center align-items-center mb-2 container">
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
        />
      </div>
      <div className=" d-flex w-100 justify-content-center align-items-center mb-2 container">
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"10%"}
          height={"100%"}
        />
      </div>

      <Skeleton
        variant="circular"
        animation="wave"
        width={"300px"}
        height={"300px"}
        // style={{ backgroundColor: "white" }}
      />
    </div>
  );
};

export default GraficoPieEsqueleto;
