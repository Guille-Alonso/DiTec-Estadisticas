import useStore from "../Zustand/Zustand";
import NavBarEsqueleto from "../components/Esqueletos/NavBarEsqueleto";
import NavBar from "./NavBar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { getAuth, authenticated, loading } = useStore();

  return (
    <>
      <NavBar />
      {children}
    </>

  );
};

export default Layout;
