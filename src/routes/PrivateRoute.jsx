import { Navigate } from "react-router-dom";
import useStore from "../Zustand/Zustand";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { getAuth, authenticated, loading } = useStore();

  useEffect(() => {
    getAuth();
  }, []);

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : authenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
