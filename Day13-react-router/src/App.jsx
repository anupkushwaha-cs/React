import React, { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import { NavLink, Route, Routes } from "react-router";
import Details from "./pages/Details";

const App = () => {
  const [toggle, setToggle] = useState("Home");

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/details" element= {<Details/>}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
