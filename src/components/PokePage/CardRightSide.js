import React from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";

import PokeEntries from "./CardContent/PokeEntries";
import BreedingTable from "./CardContent/BreedingTable";
import StatTable from "./CardContent/StatTable";

function CardRightSide({ pokemon, pokeSpecies }) {
  return (
    <Grid item xs={12} md={7} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Box component="div">
            {/* Entries */}
            <PokeEntries pokeSpecies={pokeSpecies} />
            {/* Breeding table */}
            <BreedingTable pokeSpecies={pokeSpecies} />
            {/* Stat table */}
            <StatTable pokemon={pokemon} pokeSpecies={pokeSpecies} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardRightSide;
