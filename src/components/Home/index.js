import React from "react";
import { Box, Grid } from "@mui/material";
import PokeCard from "./PokeCard";

function Homepage({ pokemons }) {
  const useStyle = {
    width: 250,
    height: 250,
    margin: 3,
    marginBottom: 7,
  };
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      {pokemons.map((pokemon) => (
        <Box sx={useStyle} key={pokemon.id}>
          <PokeCard pokemon={pokemon} />
        </Box>
      ))}
    </Grid>
  );
}

export default Homepage;
