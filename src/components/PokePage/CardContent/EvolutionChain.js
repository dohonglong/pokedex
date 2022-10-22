import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function EvolutionChain({ pokeChain, evoDescChain }) {
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
    <Box component="div">
      <Box
        commponent="div"
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "justify",
          padding: "5px 0",
        }}
      >
        Evolution
      </Box>
      {/* Evolution Chain */}
      <Box sx={evoChainBox}>
        {pokeChain.map((poke, index) => {
          return (
            <Box key={index} style={elementStyle}>
              <Box>
                <img
                  src={poke.image_url}
                  alt="Pokemon"
                  width={140}
                  height={140}
                />
                <Typography variant="h6">#{poke.poke_id}</Typography>
                <Typography
                  variant="h5"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  {poke.poke_name}
                </Typography>
              </Box>
              {index < pokeChain.length - 1 && (
                <Box style={arrowAndEvoDescType}>
                  {evoDescChain[index]}
                  <ArrowForwardIcon sx={{ fontSize: 50 }} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default EvolutionChain;
