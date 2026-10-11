import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "rounded-lg bg-red-500 px-4 py-3 font-semibold text-white"
      : "rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white";

  return (
    <div className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-700 bg-gray-900 p-6 text-white">
      <h1 className="mb-10 text-3xl font-semibold text-red-500">E-Comm</h1>

      <div className="ml-2 flex flex-col gap-4">
        <NavLink to="/main" end className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/main/users" className={linkStyle}>
          Users
        </NavLink>

        <NavLink to="/main/products" className={linkStyle}>
          Products
        </NavLink>
      </div>

      <div className="mt-auto border-t border-gray-700 pt-5">
        <button
          onClick={() => {
            localStorage.removeItem("loggedinUser");
            navigate("/", { replace: true });
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <span>↪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
