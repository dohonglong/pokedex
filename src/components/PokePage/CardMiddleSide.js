import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function CardMiddleSide({ pokemon }) {
  return (
    <Grid item xs={12}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography component="div">
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

export default CardMiddleSide;
