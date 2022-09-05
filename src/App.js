import "./App.css";
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
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
