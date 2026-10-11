import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from '../layout.jsx/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const AppRoutes = () => {

  let router =  createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element:<Home/>
            },
             {
                path: "about",
                element:<About/>
            },
             {
                path: "service",
                element:<Services/>
            }
        ]
         
      
    }
  ])
  

  return <RouterProvider router={router}/>
 }
export default AppRoutes;

