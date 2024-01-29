import { Skeleton } from "@mui/material";

const TablaEsqueleto = () => {
  return (
    <div className=" w-100">

         <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"} height={"300px"}
          className="me-3"
        />
    </div>
  )
}

export default TablaEsqueleto