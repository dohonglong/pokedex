import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function CardRightSide({ pokemon }) {
  return (
    <Grid item xs={12} md={8}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              Description
            </Box>
            <Box
              sx={{
                typography: "body1",
                textAlign: "justify",
                fontSize: 19,
                m: 2,
              }}
            >
              Something in the way
            </Box>
            <Box sx={{ typography: "h5", textAlign: "justify" }}>Abilities</Box>
            <Box
              sx={{
                typography: "body1",
                textAlign: "justify",
                fontSize: 19,
                m: 2,
              }}
            >
              <ul>
                {pokemon.abilities.map((ability) => {
                  return <li key={ability.slot}>{ability.ability.name}</li>;
                })}
              </ul>
            </Box>
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
                      {stat.stat.name}
                    </li>
                  );
                })}
              </ul>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardRightSide;
