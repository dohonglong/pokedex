import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PokeCard({ pokemon }) {
  const cardContentStyle = {
    padding: "16px",
    "&:last-child": {
      paddingBottom: "10px",
    },
  };
  const linkStyle = {
    color: "blue",
    fontWeight: "bold",
    textDecoration: "none",
  };

  //Get the type icons
  const pokeTypes = pokemon.types.map((data) => {
    return data.type.name;
  });
  const pokeTypesIcon = pokeTypes.map((type) => {
    return (
      <Box key={type} sx={{ display: "inline", margin: "0 5px" }}>
        <img src={`./type_icons/${type}.png`} alt="Types" height={50} />
      </Box>
    );
  });

  return (
    <div>
      <Card sx={{ backgroundColor: "#f4f6f6" }}>
        <CardContent>
          <Typography variant="h5">#{pokemon.id} </Typography>
        </CardContent>
        <CardMedia>
          <Link to={`/pokemon/${pokemon.name}`} style={linkStyle}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="avatar"
              width={130}
              height={130}
            />
          </Link>
        </CardMedia>
        <Typography variant="h5" textTransform="capitalize">
          <Link to={`/pokemon/${pokemon.name}`} style={linkStyle}>
            {pokemon.name}
          </Link>
        </Typography>
        <CardContent sx={cardContentStyle}>{pokeTypesIcon}</CardContent>
      </Card>
    </div>
  );
}

export default PokeCard;
