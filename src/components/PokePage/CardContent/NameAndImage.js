import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function NameAndImage({ pokemon }) {
  /* Get id, then convert to a 3-digit number */
  const pokeId = pokemon.id.toString().padStart(3, "0");

  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h5">#{pokeId}</Typography>
        </Grid>
        <Grid item container xs={10} justifyContent="flex-end">
          <Typography
            variant="h4"
            textTransform="capitalize"
            sx={{ fontWeight: "bold" }}
          >
            {pokemon.name}
          </Typography>
        </Grid>
      </Grid>
      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default
            ? pokemon.sprites.other["official-artwork"].front_default
            : pokemon.sprites.other.dream_world.front_default
        }
        alt="Avatar"
        width={300}
      />
    </Box>
  );
}

export default NameAndImage;
