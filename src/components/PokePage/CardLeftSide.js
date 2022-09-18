import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function CardLeftSide({ pokemon }) {
  /* Get id, then convert to a 3-digit number */
  const pokeId = pokemon.id.toString().padStart(3, "0");
  /* Get names */
  const pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  /* Get types */
  const pokeTypes = pokemon.types.map((data) => data.type.name).join(" ");

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h5">#{pokeId}</Typography>
            </Grid>
            <Grid item container xs={10} justifyContent="flex-end">
              <Typography variant="h5">{pokeName}</Typography>
            </Grid>
          </Grid>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt="Avatar"
            width={220}
          />
          <Typography component="div" variant="h5">
            <Box sx={{ fontWeight: "bold" }}>{pokeTypes}</Box>
          </Typography>
          <Typography component="div">
            <Box sx={{ typography: "h6" }}>Height: {pokemon.height}</Box>
            <Box sx={{ typography: "h6" }}>Weight: {pokemon.weight}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLeftSide;
