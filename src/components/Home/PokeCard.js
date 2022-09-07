import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function PokeCard({ pokemon }) {
  const pokeTypes = pokemon.types.map((data) => {
    return data.type.name;
  });

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6">#{pokemon.id}</Typography>
          <Typography variant="h5">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
        </CardContent>
        <CardMedia>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="avatar"
            width={140}
            height={140}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h6">{pokeTypes.join(" ")}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PokeCard;
