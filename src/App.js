import "./App.css";
//import useAllPokemons from "./custom-hooks/useAllPokemons";
import usePokemon from "./custom-hooks/usePokemon";

function App() {
  //const [pokemons, error] = useAllPokemons();
  const [pokemon, error] = usePokemon();

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className="App">
      <h1>{pokemon[10]}</h1>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon[11]}.svg`}
        alt="Pic"
      />

      {/* {pokemons?.map((pokemon) => (
        <ol key={pokemon.name}>
          <p>{pokemon.name}</p>
        </ol>
      ))} */}
    </div>
  );
}

export default App;
