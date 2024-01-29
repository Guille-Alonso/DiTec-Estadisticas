import { Skeleton } from "@mui/material"
import './NavBarEsqueleto.css'

const NavBarEsqueleto = () => {
    return (
        <div className=" w-100 ">

            <Skeleton
                variant="rectangular"
                animation="none"
                width={"100%"} height={"79px"}
                className="me-3 navSkeleton"
                
            />
        </div>
    )
}

export default NavBarEsqueleto