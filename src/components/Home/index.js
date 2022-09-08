import React from "react";
import { Box, Grid } from "@mui/material";
import PokeCard from "./PokeCard";

function Homepage({ pokemons }) {
  const useStyle = {
    width: 230,
    height: 310,
    margin: 3,
  };
  return (
    <div className="main">
      <Grid container spacing={0} alignItems="center" justifyContent="center">
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
