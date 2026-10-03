import React from "react";
import Navbar from "./Componets/Navbar";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import AppRoutes from "./Routes/AppRoutes";


const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes/>

    </div>
  );
};

export default App;