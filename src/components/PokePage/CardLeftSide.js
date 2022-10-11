import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function CardLeftSide({ pokemon }) {
  /* Get id, then convert to a 3-digit number */
  const pokeId = pokemon.id.toString().padStart(3, "0");

  return (
    <Grid
      item
      xs={12}
      md={5}
      sx={{ border: "3px solid black", minHeight: "680px" }}
    >
      <Card>
        <CardContent>
          <Typography component="div">
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5">#{pokeId}</Typography>
              </Grid>
              <Grid item container xs={10} justifyContent="flex-end">
                <Typography variant="h5" textTransform="capitalize">
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
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              Base stats
            </Box>
            <Box
              sx={{
                typography: "body1",
                textAlign: "justify",
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              <ul>
                {pokemon.stats.map((stat) => {
                  return (
                    <li key={stat.stat.name} style={{ listStyleType: "none" }}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  );
                })}
                <li style={{ listStyleType: "none" }}>Total</li>
              </ul>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLeftSide;
