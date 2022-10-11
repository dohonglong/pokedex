import React from "react";
import { Box, Grid } from "@mui/material";

import useAllPokemons from "../../custom-hooks/useAllPokemon";
import PokeCard from "./PokeCard";

function Homepage() {
  const [pokemons, error] = useAllPokemons([]);

  const useStyle = {
    width: 230,
    height: 310,
    margin: 3,
  };

  /* Catch error */
  if (error) {
    return <p>Something went wrong. Can't load the Pokemons.</p>;
  }

  return (
    <div className="main">
      <Grid container alignItems="center" justifyContent="center">
        {pokemons.map((pokemon) => (
          <Box sx={useStyle} key={pokemon.id}>
            <PokeCard pokemon={pokemon} />
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Homepage;
