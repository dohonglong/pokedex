import React from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import EvolutionChain from "./CardContent/EvolutionChain";

function CardMiddleSide({ pokeChain, evoDescChain }) {
  return (
    <Grid item xs={12}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Box component="div">
            <EvolutionChain pokeChain={pokeChain} evoDescChain={evoDescChain} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardMiddleSide;
