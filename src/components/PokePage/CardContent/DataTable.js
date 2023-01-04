import React from "react";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";

function DataTable({ pokemon, pokeSpecies }) {
  /* Get color for type */
  const getColor = (type) => {
    switch (type) {
      case "bug":
        return "#84c400";
      case "dark":
        return "#5b5366";
      case "dragon":
        return "#0070ca";
      case "electric":
        return "#fbd200";
      case "fairy":
        return "#fb8aec";
      case "fighting":
        return "#e12c6a";
      case "fire":
        return "#ff983f";
      case "flying":
        return "#8aace4";
      case "ghost":
        return "#4b6ab3";
      case "grass":
        return "#35c04a";
      case "ground":
        return "#e97333";
      case "ice":
        return "#4bd2c1";
      case "normal":
        return "#929ba3";
      case "poison":
        return "#b667cf";
      case "psychic":
        return "#ff6676";
      case "rock":
        return "#c9b787";
      case "steel":
        return "#5a8fa3";
      case "water":
        return "#3393dd";
      default:
        return "black";
    }
  };
  /* Get types */
  const pokeTypes = pokemon.types.map((data) => {
    return (
      <Box
        key={data.type.name}
        component="div"
        sx={{
          display: "inline",
          border: "1px solid black",
          backgroundColor: getColor(data.type.name),
          padding: "0px 10px",
          marginRight: "5px",
          color: "white",
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {data.type.name}
      </Box>
    );
  });
  /* Get abilites */
  const pokeAbilities = pokemon.abilities.map((ability) => {
    return (
      <li key={ability.slot} style={{ listStyleType: "none" }}>
        {ability.ability.name.charAt(0).toUpperCase() +
          ability.ability.name.slice(1)}{" "}
        {ability.is_hidden === true ? "(hidden ability)" : ""}
      </li>
    );
  });
  /* Font size for table */
  const titleStyle = {
    fontSize: 15,
  };
  const contentStyle = {
    fontSize: 17,
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
        Pokédex data
      </Box>
      <Box component="div">
        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell width="25%" sx={titleStyle}>
                  Types
                </TableCell>
                <TableCell sx={contentStyle}>{pokeTypes}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Species</TableCell>
                <TableCell sx={contentStyle}>{pokeSpecies.genera}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Height</TableCell>
                <TableCell sx={contentStyle}>
                  {(pokemon.height / 10).toFixed(1)} m
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Weight</TableCell>
                <TableCell sx={contentStyle}>
                  {(pokemon.weight / 10).toFixed(1)} kg
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Abilities</TableCell>
                <TableCell sx={contentStyle}>{pokeAbilities}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default DataTable;
