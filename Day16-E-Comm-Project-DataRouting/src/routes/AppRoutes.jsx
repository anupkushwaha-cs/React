import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoutes from "./PublicRoutes";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import UsersPage from "../pages/UsersPage";


const AppRoutes = () => {
  let router = createBrowserRouter([
    
     {
  path: "/",
  element: <PublicRoutes />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ],
},
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "users",
              element: <UsersPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};



export default AppRoutes;
