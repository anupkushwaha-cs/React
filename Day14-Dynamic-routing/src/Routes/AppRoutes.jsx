import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Product";
import ProductDetails from "../Pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/details/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
