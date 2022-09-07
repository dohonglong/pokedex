import React from "react";
import { Box, Grid } from "@mui/material";
import PokeCard from "./PokeCard";

function Homepage({ pokemons }) {
  return (
    <Box>
      <Grid container>
        {pokemons.map((pokemon) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={pokemon.id}
            sx={{ p: 2, color: "#f4f6f6" }}
          >
            <PokeCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Homepage;
