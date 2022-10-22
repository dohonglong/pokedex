import React from "react";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";

function DataTable({ pokemon }) {
  /* Get types */
  const pokeTypes = pokemon.types.map((data) => data.type.name).join(" ");

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
          padding: "15px 0",
        }}
      >
        Breeding
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
