import { Skeleton } from "@mui/material";
import "./GraficoBarraEsqueleto.css";

const GraficoBarraEsqueleto = () => {
  return (
    <div className="container contEsqueleto">
      <div className=" d-flex justify-content-center  align-items-center mb-2 container">
        <Skeleton
          variant="text"
          animation="wave"
          width={"7%"}
          height={"auto"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"7%"}
          height={"auto"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"7%"}
          height={"auto"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"7%"}
          height={"auto"}
          className="me-3"
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"7%"}
          height={"auto"}
          className="me-3"
        />
      </div>
      <div className=" d-flex justify-content-center align-items-end pt-4 bodyGraf container ">
        {Array.from({ length: 10 }).map(() => (
          // eslint-disable-next-line react/jsx-key
          <tr className="pb-0 d-flex align-items-end">
            <td className="pe-2 ">
              <Skeleton
                variant="rectangular"
                width={100}
                height={Math.floor(Math.random() * 500)}
              />
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default GraficoBarraEsqueleto;
