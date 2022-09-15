import { Box, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import usePokemon from "../../custom-hooks/usePokemon";

function PokePage() {
  const { name } = useParams();
  const [pokemon, error] = usePokemon(name);

  //const image = Object.values(pokemon.sprites)[8].home;
  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main">
      <h1>{pokemon.name}</h1>
      {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="Alt" /> */}
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ border: "3px solid black" }}>
            <img
              src={pokemon.sprites.other.home.front_default}
              alt="Avatar"
              width={350}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ border: "3px solid black" }}>{pokemon.name}</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default PokePage;
