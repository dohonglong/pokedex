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
  return (
    <Box
      sx={{
        typography: "h5",
        textAlign: "justify",
        paddingTop: "20px",
      }}
    >
      Pokédex data
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "17px", border: 1, width: "25%" }}>
                Types
              </TableCell>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>
                {pokeTypes}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>Height</TableCell>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>
                {(pokemon.height / 10).toFixed(1)} m
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>Weight</TableCell>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>
                {(pokemon.weight / 10).toFixed(1)} kg
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>
                Abilities
              </TableCell>
              <TableCell sx={{ fontSize: "17px", border: 1 }}>
                {pokeAbilities}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DataTable;
