import "./login.css";
import logoMuni from "../../assets/logoMuniNuevo.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import useStore from "../../Zustand/Zustand";
import { LOGIN_VALUES } from "../../helpers/constantes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authenticated, botonState, login } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(LOGIN_VALUES);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    // Realizar el login con el estado y funciones proporcionadas por el store
    e.preventDefault();
    login(values);
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  return (
    <div className="d-flex justify-content-center align-items-center layoutHeight">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleLogin}>
          <img src={logoMuni} alt="logo Municipalidad" className="logoMuni" />
          <div className="inputBox">
            <input
              name="nombreUsuario"
              type="text"
              required="required"
              maxLength={15}
              value={values.nombreUsuario}
              onChange={handleChange}
            />
            <span>Nombre de Usuario</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required="required"
              maxLength={30}
              value={values.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleShowPassword}
              className="icono-password-login"
            />
            <span>Contraseña</span>
            <i></i>
          </div>

          <Button
            variant="contained"
            className="btn-light mt-4 buttonLoginColor"
            disabled={botonState}
            type="submit"
          >
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
