import React from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import { useParams } from "react-router-dom";

import usePokemon from "../../custom-hooks/usePokemon";
import usePokemonEvolution from "../../custom-hooks/usePokemonEvolution";
import usePokemonSpecies from "../../custom-hooks/usePokemonSpecies";
import CardLeftSide from "./CardLeftSide";
import CardMiddleSide from "./CardMiddleSide";
import CardRightSide from "./CardRightSide";

function PokePage() {
  const { name } = useParams();
  const [pokemon, error] = usePokemon(name);
  const [pokeSpecies, errorSpecies] = usePokemonSpecies(
    pokemon ? pokemon.id : 1
  );
  const evo_ID = pokeSpecies ? pokeSpecies.evolution_chain : 1;
  const [pokeChain, evoDescChain, errorChain] = usePokemonEvolution(evo_ID);
  const theme = createTheme({
    typography: {
      fontFamily: "Fira Sans , Trebuchet MS, Helvetica, Arial sans-serif",
    },
  });

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }
  if (errorSpecies) {
    return <p>Can't load species detail</p>;
  }
  if (errorChain) {
    return <p>Something went wrong with evolution chain</p>;
  }
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokePage">
      <ThemeProvider theme={theme}>
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
            backgroundColor: "white",
            gridTemplateColumns: "5fr 7fr",
          }}
        >
          {/* Left side of the card */}
          <CardLeftSide pokemon={pokemon} pokeSpecies={pokeSpecies} />

          {/* Right side of the card */}
          <CardRightSide pokemon={pokemon} pokeSpecies={pokeSpecies} />

          {/* Middle (below) side of the card */}
          <CardMiddleSide pokeChain={pokeChain} evoDescChain={evoDescChain} />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default PokePage;
