import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import DataTable from "./LeftSideContent/DataTable";

function CardLeftSide({ pokemon }) {
  /* Get id, then convert to a 3-digit number */
  const pokeId = pokemon.id.toString().padStart(3, "0");

  return (
    <Grid item xs={12} md={5} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Box component="div">
            <Box>
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
            </Box>
            {/* Data table */}
            <DataTable pokemon={pokemon} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLeftSide;
