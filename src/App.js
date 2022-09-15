import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import logo from "./components/Logo/logo.png";
import Homepage from "./components/Home";
import PokePage from "./components/PokePage";

//import usePokemon from "./custom-hooks/usePokemon";

function App() {
  //const [pokemon, error] = usePokemon();

  return (
    <div className="App">
      <div className="logo_center">
        <img src={logo} alt="Logo" />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:name" element={<PokePage />} />
      </Routes>
    </div>
  );
}

export default App;
