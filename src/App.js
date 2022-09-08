import React from "react";
import "./App.css";
import Homepage from "./components/Home";
import useAllPokemons from "./custom-hooks/useAllPokemon";
//import usePokemon from "./custom-hooks/usePokemon";

function App() {
  const [pokemons, error] = useAllPokemons([]);
  //const [pokemon, error] = usePokemon();

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className="App">
      <div className="logo_center">
        <img src="./logo.png" alt="Logo" />
      </div>
      <Homepage pokemons={pokemons} />
    </div>
  );
}

export default App;
