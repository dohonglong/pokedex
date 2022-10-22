import React from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";

import StatTable from "./RightSideContent/StatTable";
import BreedingTable from "./RightSideContent/BreedingTable";

function CardRightSide({ pokemon, pokeSpecies }) {
  /* Get entry */
  const pokeEntries = pokeSpecies
    ? pokeSpecies.flavor_text_entries &&
      pokeSpecies.flavor_text_entries.length > 0
      ? pokeSpecies.flavor_text_entries.map((entry) => {
          return entry.version === "emerald" ? entry.flavor_text : "";
        })
      : "No description of this Pokemon"
    : "Error with description/ No Pokemon at all";

  return (
    <Grid item xs={12} md={7} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Box component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              <Box
                sx={{
                  typography: "body1",
                  textAlign: "justify",
                  fontStyle: "oblique",
                  fontSize: 20,
                  m: 2,
                }}
              >
                {pokeEntries}
              </Box>
            </Box>
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
