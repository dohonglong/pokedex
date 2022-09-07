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
      <h1 className="title">POKEDEX</h1>
      <Homepage pokemons={pokemons} />
    </div>
  );
}

export default App;
