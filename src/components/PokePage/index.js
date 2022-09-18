import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import usePokemon from "../../custom-hooks/usePokemon";
import CardLeftSide from "./CardLeftSide";
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
            xs: 0.7, // 100%
            sm: 500, // sm = 600px then size of the card is 500px
            md: 800, // md = 900px then size of the card is 800px
            lg: 1000, // lg = 1200px then size of the card is 1000px
          },
        }}
      >
        {/* Left side of the card */}
        <CardLeftSide pokemon={pokemon} />
        {/* Right side of the card */}
        <CardRightSide pokemon={pokemon} />
      </Grid>
    </div>
  );
}

export default PokePage;
