import React from "react";
import { Box } from "@mui/material";

function PokeEntries({ pokeSpecies }) {
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
  );
}

export default PokeEntries;
