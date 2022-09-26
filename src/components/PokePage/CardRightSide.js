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
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

function CardRightSide({ pokemon, pokeSpecies }) {
  /* Get entry */
  const pokeEntries = !pokeSpecies.flavor_text_entries
    ? "No description of this Pokemon"
    : pokeSpecies.flavor_text_entries.map((entry) => {
        return entry.language.name === "en" && entry.version.name === "emerald"
          ? entry.flavor_text
          : "";
      });

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

  /* Get egg group */
  const pokeEgg = pokeSpecies.egg_groups
    .map((egg_group) => {
      return egg_group.name.charAt(0).toUpperCase() + egg_group.name.slice(1);
    })
    .join(", ");

  /* Get gender */
  const fetchGender = (genderRate) => {
    switch (genderRate) {
      case 0:
        return (
          <Box>
            100% <MaleIcon color="primary" />
            {", "}0% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 1:
        return (
          <Box>
            87.5% <MaleIcon color="primary" />
            {", "}12.5% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 2:
        return (
          <Box>
            75% <MaleIcon color="primary" />
            {", "}25% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 3:
        return (
          <Box>
            62.5% <MaleIcon color="primary" />
            {", "}37.5% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 4:
        return (
          <Box>
            50% <MaleIcon color="primary" />
            {", "}50% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 5:
        return (
          <Box>
            37.5% <MaleIcon color="primary" />
            {", "}62.5% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 6:
        return (
          <Box>
            25% <MaleIcon color="primary" />
            {", "}75% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 7:
        return (
          <Box>
            12.5% <MaleIcon color="primary" />
            {", "}87.5% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      case 8:
        return (
          <Box>
            0% <MaleIcon color="primary" />
            {", "}100% <FemaleIcon sx={{ color: "#FF00FF" }} />
          </Box>
        );
      default:
        return <span>Loading...</span>;
    }
  };

  return (
    <Grid
      item
      xs={12}
      md={7}
      sx={{ border: "3px solid black", minHeight: "680px" }}
    >
      <Card>
        <CardContent>
          <Typography component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              <Box
                sx={{
                  typography: "body1",
                  textAlign: "justify",
                  fontSize: 19,
                  m: 2,
                }}
              >
                {pokeEntries}
              </Box>
            </Box>

            {/* Data table */}
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
                        {pokeAbilities}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Breeding table */}
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
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {pokeEgg}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Gender
                      </TableCell>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {pokeSpecies.gender_rate === -1
                          ? "Genderless"
                          : fetchGender(pokeSpecies.gender_rate)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Egg cycles
                      </TableCell>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {pokeSpecies.hatch_counter}
                        {" ("}up to {pokeSpecies.hatch_counter * 257} steps
                        {")"}
                      </TableCell>
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
