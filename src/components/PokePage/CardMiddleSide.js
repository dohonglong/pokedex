import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CardMiddleSide({ pokeChain, evoDescChain }) {
  /* The whole chain */
  const evoChainBox = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    fontSize: 19,
  };
  /* Element = Pokemon + Arrow */
  const elementStyle = {
    display: "flex",
    flexFlow: "row wrap",
    //border: "2px solid red",
  };
  /* Arrow and the evoDesc */
  const arrowAndEvoDescType = {
    width: "13vw",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    //border: "2px solid blue",
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography variant="h5" textAlign="justify">
            Evolution
          </Typography>
          {/* NEW AND UPDATED */}
          <Box sx={evoChainBox}>
            {pokeChain.map((poke, index) => {
              return (
                <div key={index} style={elementStyle}>
                  <div>
                    <img
                      src={poke.image_url}
                      alt="Pokemon"
                      width={140}
                      height={140}
                    />
                    <Typography variant="h5" textTransform="capitalize">
                      {poke.poke_name}
                    </Typography>
                  </div>
                  {index < pokeChain.length - 1 && (
                    <div style={arrowAndEvoDescType}>
                      {evoDescChain[index]}
                      <ArrowForwardIcon sx={{ fontSize: 50 }} />
                    </div>
                  )}
                </div>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardMiddleSide;
