import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import logo from "./components/Logo/logo.png";
import Homepage from "./components/Home";
import PokePage from "./components/PokePage";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <div className="logo_center">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:name" element={<PokePage />} />
      </Routes>
    </div>
  );
}

export default App;
