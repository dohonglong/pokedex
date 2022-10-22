import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";
import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

function BreedingTable({ pokeSpecies }) {
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
                  Egg groups
                </TableCell>
                <TableCell sx={contentStyle}>{pokeEgg}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Gender</TableCell>
                <TableCell sx={contentStyle}>
                  {pokeSpecies
                    ? pokeSpecies.gender_rate === -1
                      ? "Genderless"
                      : fetchGender(pokeSpecies.gender_rate)
                    : "Error with gender/ No Pokemon at all"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={titleStyle}>Egg cycles</TableCell>
                <TableCell sx={contentStyle}>
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
    </Box>
  );
}

export default BreedingTable;
