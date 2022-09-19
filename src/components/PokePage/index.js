import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import usePokemon from "../../custom-hooks/usePokemon";
import CardLeftSide from "./CardLeftSide";
import CardMiddleSide from "./CardMiddleSide";
import CardRightSide from "./CardRightSide";

function PokePage() {
  const { name } = useParams();
  const [pokemon, error] = usePokemon(name);

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokePage">
      <h1>{pokemon.name}</h1>

      <Grid
        container
        margin="auto"
        sx={{
          width: {
            xs: 1.0, // 100%
            //sm: 600, // sm = 600px then size of the card is 500px
            //md: 800, // md = 900px then size of the card is 800px
            lg: 1200, // lg = 1200px then size of the card is 1000px
          },
        }}
      >
        {/* Left side of the card */}
        <CardLeftSide pokemon={pokemon} />
        {/* Middle side of the card */}

        {/* Right side of the card */}
        <CardRightSide pokemon={pokemon} />

        <CardMiddleSide pokemon={pokemon} />
      </Grid>
    </div>
  );
}

export default PokePage;
