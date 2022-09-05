import { Box, Grid } from "@mui/material";
import React from "react";
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
      <h1>POKEDEX</h1>
      <Box>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {pokemons.map((pokemon) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={pokemon.id}
              sx={{ border: 1, m: 5 }}
            >
              <h1>
                #{pokemon.id}:{" "}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h1>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt="avatar"
                width={150}
                height={150}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
