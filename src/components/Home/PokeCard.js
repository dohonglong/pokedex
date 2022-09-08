import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function PokeCard({ pokemon }) {
  const cardContentStyle = {
    padding: "16px",
    "&:last-child": {
      paddingBottom: "10px",
    },
  };

  //Get the type icons
  const pokeTypes = pokemon.types.map((data) => {
    return data.type.name;
  });
  const pokeTypesIcon = pokeTypes.map((type) => {
    return (
      <img
        key={type}
        src={`./type_icons/${type}.png`}
        alt="Types"
        height={50}
      />
    );
  });

  return (
    <div>
      <Card sx={{ backgroundColor: "#f4f6f6" }}>
        <CardContent>
          <Typography variant="h5">#{pokemon.id} </Typography>
        </CardContent>
        <CardMedia>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="avatar"
            width={130}
            height={130}
          />
        </CardMedia>
        <Typography variant="h5">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
        <CardContent sx={cardContentStyle}>{pokeTypesIcon}</CardContent>
      </Card>
    </div>
  );
}

export default PokeCard;
