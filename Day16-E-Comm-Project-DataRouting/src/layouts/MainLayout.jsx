
import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen p-2 grid grid-cols-[250px_1fr] bg-gray-100 gap-2">
      <Navbar />

      <div className="h-full overflow-y-auto bg-white rounded-xl p-5 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
