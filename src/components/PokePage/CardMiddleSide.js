import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function CardMiddleSide({ pokeChain }) {
  return (
    <Grid item xs={12}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              Evolution
              <Box
                sx={{
                  typography: "body1",
                  textAlign: "justify",
                  fontSize: 19,
                  m: 2,
                }}
              >
                {pokeChain
                  .map((poke) => {
                    // return <li key={poke.species_name}>{poke.species_name}</li>;
                    return poke.species_name;
                  })
                  .join(", ")}
              </Box>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardMiddleSide;
