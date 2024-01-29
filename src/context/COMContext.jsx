import React, { createContext, useState } from "react";

export const COMContext = createContext();

const ProviderCOM = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [botonState, setBotonState] = useState(false);

  const login = async (values) => {
    setBotonState(true);
    try {
      const { data } = await axios.post("/users/login", values);
      setAuthenticated(!!data.user);
      setUser(data.user);
      axios.defaults.headers.common["Authorization"] = data.token;
      localStorage.setItem("token", data.token);
    } catch (error) {
      toast.error(error.response?.data.message || error.message);
    }
    setBotonState(false);
  };

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return setAuthenticated(false);
      }
      axios.defaults.headers.common["Authorization"] = token;
      const { data } = await axios.get("/users/authStatus");
      setUser(data.user);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      toast.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };

  return (
    <COMContext.Provider
      value={{
        user,
        authenticated,
        setAuthenticated,
        loading,
        login,
        getAuth,
        setLoading,
        botonState,
        setBotonState,
      }}
    >
      {children}
    </COMContext.Provider>
  );
};

export default ProviderCOM;
