import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
