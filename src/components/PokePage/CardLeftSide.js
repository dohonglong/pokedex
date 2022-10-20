import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";

//import StatBar from "../StatBar/StatBar";

function CardLeftSide({ pokemon, pokeSpecies }) {
  /* Get id, then convert to a 3-digit number */
  const pokeId = pokemon.id.toString().padStart(3, "0");

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
    <Grid item xs={12} md={5} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Typography component="div">
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h5">#{pokeId}</Typography>
              </Grid>
              <Grid item container xs={10} justifyContent="flex-end">
                <Typography variant="h5" textTransform="capitalize">
                  {pokemon.name}
                </Typography>
              </Grid>
            </Grid>
            <img
              src={
                pokemon.sprites.other["official-artwork"].front_default
                  ? pokemon.sprites.other["official-artwork"].front_default
                  : pokemon.sprites.other.dream_world.front_default
              }
              alt="Avatar"
              width={300}
            />

            {/* Data table */}
            <Box
              sx={{
                typography: "h5",
                textAlign: "justify",
                paddingTop: "20px",
              }}
            >
              Pokédex data
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{ fontSize: "17px", border: 1, width: "25%" }}
                      >
                        Types
                      </TableCell>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {pokeTypes}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Height
                      </TableCell>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {(pokemon.height / 10).toFixed(1)} m
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Weight
                      </TableCell>
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
            {/* <Box
              sx={{
                typography: "h5",
                textAlign: "justify",
                paddingTop: "30px",
              }}
            >
              Base stats
            </Box>
            <Box
              sx={{
                typography: "body1",
                textAlign: "justify",
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              <ul>
                {pokemon.stats.map((stat) => {
                  return (
                    <li key={stat.stat.name} style={{ listStyleType: "none" }}>
                      {stat.stat.name}:
                      <StatBar bgcolor="#6a1b9a" completed={stat.base_stat} />
                    </li>
                  );
                })}
                <li style={{ listStyleType: "none" }}>Total</li>
              </ul>
            </Box> */}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLeftSide;
