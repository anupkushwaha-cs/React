import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        <div className="flex gap-6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
        </div>

        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
