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
import StatBar from "../StatBar/StatBar";

function CardRightSide({ pokemon, pokeSpecies }) {
  /* Get entry */
  const pokeEntries = pokeSpecies
    ? pokeSpecies.flavor_text_entries &&
      pokeSpecies.flavor_text_entries.length > 0
      ? pokeSpecies.flavor_text_entries.map((entry) => {
          return entry.version === "emerald" ? entry.flavor_text : "";
        })
      : "No description of this Pokemon"
    : "Error with description/ No Pokemon at all";
  /* Get egg group */
  const pokeEgg = pokeSpecies
    ? pokeSpecies.egg_groups
        .map((egg_group) => {
          return egg_group.charAt(0).toUpperCase() + egg_group.slice(1);
        })
        .join(", ")
    : "Error with egg/ No Pokemon at all";

  /* Get gender */
  const fetchGender = (genderRate) => {
    switch (genderRate) {
      case 0:
        return (
          <Box>
            100% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}0% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 1:
        return (
          <Box>
            87.5% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}12.5% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 2:
        return (
          <Box>
            75% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}25% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 3:
        return (
          <Box>
            62.5% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}37.5% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 4:
        return (
          <Box>
            50% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}50% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 5:
        return (
          <Box>
            37.5% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}62.5% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 6:
        return (
          <Box>
            25% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}75% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 7:
        return (
          <Box>
            12.5% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}87.5% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      case 8:
        return (
          <Box>
            0% <MaleIcon color="primary" sx={{ m: -0.5 }} />
            {", "}100% <FemaleIcon sx={{ color: "#FF00FF", m: -0.5 }} />
          </Box>
        );
      default:
        return <span>Loading...</span>;
    }
  };

  return (
    <Grid item xs={12} md={7} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Typography component="div">
            <Box sx={{ typography: "h5", textAlign: "justify" }}>
              <Box
                sx={{
                  typography: "body1",
                  textAlign: "justify",
                  fontStyle: "oblique",
                  fontSize: 18,
                  m: 2,
                }}
              >
                {pokeEntries}
              </Box>
            </Box>
            {/* Breeding table */}
            <Box
              sx={{
                typography: "h5",
                textAlign: "justify",
                paddingTop: "5px",
              }}
            >
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
                        {pokeSpecies
                          ? pokeSpecies.gender_rate === -1
                            ? "Genderless"
                            : fetchGender(pokeSpecies.gender_rate)
                          : "Error with gender/ No Pokemon at all"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        Egg cycles
                      </TableCell>
                      <TableCell sx={{ fontSize: "17px", border: 1 }}>
                        {pokeSpecies
                          ? pokeSpecies.hatch_counter +
                            ` (up to ${pokeSpecies.hatch_counter * 257} steps)`
                          : "Error with hatch/ No Pokemon at all"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              sx={{
                typography: "h5",
                textAlign: "justify",
                paddingTop: "20px",
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
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardRightSide;
