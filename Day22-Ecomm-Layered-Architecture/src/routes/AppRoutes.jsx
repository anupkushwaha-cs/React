import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/ResisterPage";
import MainLayouts from "../app/layouts/MainLayouts";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shered/ui/Pages/HomePage";
import Cart from "../features/cart/ui/pages/Cart";
import Order from "../features/orders/ui/pages/Order";
import ProductPages from "../features/products/ui/pages/ProductPages";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,

          children: [
            {
                path:"",
                element:<LoginPage/>
          },
           {
                path:"register",
                element:<RegisterPage/>
          }
        
        
        ],
        },
      ],
    },

    {
        path:"/main",
        element:<MainProtected/>,
        children:[
            {
                path:"",
                element:<MainLayouts/>,
                children:[
                    {
                        path:"",
                        element:<HomePage/>
                    },
                            {
                        path:"cart",
                        element:<Cart/>
                    },
                            {
                        path:"order",
                        element:<Order/>
                    },
                            {
                        path:"products",
                        element:<ProductPages/>
                    },
                ]
            }
        ]
    }


  ]);
  return <RouterProvider />;
};

export default AppRoutes;
