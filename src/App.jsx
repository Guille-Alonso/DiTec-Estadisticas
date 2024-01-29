import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import CapitalHumano from "./pages/CapitalHumano/CapitalHumano";
import Reclamos from "./pages/EstadisticasReclamos/Reclamos";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/cap-humano"
              element={
                <PrivateRoute>
                  <CapitalHumano />
                </PrivateRoute>
              }
            />
            <Route
              path="/reclamos-estadisticas"
              element={
                <PrivateRoute>
                  <Reclamos />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
