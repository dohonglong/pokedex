import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CardMiddleSide({ pokeChain, evoDescChain }) {
  /* The whole chain */
  const evoChainBox = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    typography: "body1",
    textAlign: "justify",
    fontSize: 19,
    m: 2,
  };
  /* Image and Pokemon name */
  const imageAndTypoStyle = {
    textAlign: "center",
  };
  /* Arrow and the evoDesc */
  const arrowAndEvoDescType = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography variant="h5" textAlign="justify">
            Evolution
          </Typography>
          <Box sx={evoChainBox}>
            {pokeChain.slice(0, 1).map((item) => {
              return (
                <div key={item.poke_name} style={imageAndTypoStyle}>
                  <img
                    src={item.image_url}
                    alt="Avatar"
                    width={130}
                    height={130}
                  />
                  <Typography variant="h5" textTransform="capitalize">
                    {item.poke_name}
                  </Typography>
                </div>
              );
            })}
            <div style={arrowAndEvoDescType}>
              {evoDescChain[0]}
              <ArrowForwardIcon sx={{ fontSize: 50 }} />
            </div>
            {pokeChain.slice(1, 2).map((item) => {
              return (
                <div key={item.poke_name} style={imageAndTypoStyle}>
                  <img
                    src={item.image_url}
                    alt="Avatar"
                    width={130}
                    height={130}
                  />
                  <Typography variant="h5" textTransform="capitalize">
                    {item.poke_name}
                  </Typography>
                </div>
              );
            })}
            <div style={arrowAndEvoDescType}>
              {evoDescChain[1]}
              <ArrowForwardIcon sx={{ fontSize: 50 }} />
            </div>
            {pokeChain.slice(2).map((item) => {
              return (
                <div key={item.poke_name} style={imageAndTypoStyle}>
                  <img
                    src={item.image_url}
                    alt="Avatar"
                    width={130}
                    height={130}
                  />
                  <Typography variant="h5" textTransform="capitalize">
                    {item.poke_name}
                  </Typography>
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
