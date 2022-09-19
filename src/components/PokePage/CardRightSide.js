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

function CardRightSide({ pokemon }) {
  /* Get types */
  const pokeTypes = pokemon.types.map((data) => data.type.name).join(" ");

  return (
    <Grid item xs={12} md={7}>
      <Card sx={{ border: "3px solid black" }}>
        <CardContent>
          <Typography component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              Pokédex entry
              <Box
                sx={{
                  typography: "body1",
                  textAlign: "justify",
                  fontSize: 19,
                  m: 2,
                }}
              >
                Something in the way
              </Box>
            </Box>
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
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
                        {pokemon.abilities.map((ability) => {
                          return (
                            <li
                              key={ability.slot}
                              style={{ listStyleType: "none" }}
                            >
                              {ability.ability.name.charAt(0).toUpperCase() +
                                ability.ability.name.slice(1)}{" "}
                              {ability.is_hidden === true
                                ? "(hidden ability)"
                                : ""}
                            </li>
                          );
                        })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              Breeding
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{ fontSize: "17px", border: 1, width: "25%" }}
                      >
                        Egg groups
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "17px", border: 1 }}
                      ></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Gender
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "17px", border: 1 }}
                      ></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Egg cycles
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "17px", border: 1 }}
                      ></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardRightSide;
