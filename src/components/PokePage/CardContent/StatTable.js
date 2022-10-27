import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

import StatBar from "../../StatBar/StatBar";

function StatTable({ pokemon, pokeSpecies }) {
  /* Stat bar color */
  const bgColor = pokeSpecies.color === "white" ? "#a4a4a4" : pokeSpecies.color;

  /* Get stat */
  const hp_stat = pokemon.stats[0].base_stat;
  const atk_stat = pokemon.stats[1].base_stat;
  const def_stat = pokemon.stats[2].base_stat;
  const sp_atk_stat = pokemon.stats[3].base_stat;
  const sp_def_stat = pokemon.stats[4].base_stat;
  const speed_stat = pokemon.stats[5].base_stat;
  const total_stat =
    hp_stat + atk_stat + def_stat + sp_atk_stat + sp_def_stat + speed_stat;
  // Minimum values are based on a hindering nature (0.9), 0 EVs, 0 IVs.
  const minHP_Stat = (stat) => {
    if (pokemon.id === 292) {
      //Shedinja HP
      return 1;
    } else {
      return Math.floor(((2 * stat + 0 + 0 / 4) * 100) / 100 + 100 + 10);
    }
  };
  const minStat = (stat) => {
    return Math.floor(
      Math.floor(((2 * stat + 0 + 0 / 4) * 100) / 100 + 5) * 0.9
    );
  };
  // Maximum values are based on a beneficial nature (1.1), 252 EVs, 31 IVs
  const maxHP_Stat = (stat) => {
    if (pokemon.id === 292) {
      //Shedinja HP
      return 1;
    } else {
      return Math.floor(((2 * stat + 31 + 252 / 4) * 100) / 100 + 100 + 10);
    }
  };
  const maxStat = (stat) => {
    return Math.floor(
      Math.floor(((2 * stat + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
    );
  };
  // Put all stats in an array
  const pokeStats = [
    ["HP", hp_stat, minHP_Stat(hp_stat), maxHP_Stat(hp_stat)],
    ["Atk", atk_stat, minStat(atk_stat), maxStat(atk_stat)],
    ["Def", def_stat, minStat(def_stat), maxStat(def_stat)],
    ["Sp.Atk", sp_atk_stat, minStat(sp_atk_stat), maxStat(sp_atk_stat)],
    ["Sp.Def", sp_def_stat, minStat(sp_def_stat), maxStat(sp_def_stat)],
    ["Speed", speed_stat, minStat(speed_stat), maxStat(speed_stat)],
  ];

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "justify",
          padding: "15px 0",
        }}
      >
        Base stats
      </Box>
      <Box component="div" textTransform="uppercase">
        <TableContainer>
          <Table size="small">
            <TableBody>
              {pokeStats.map((stat) => {
                return (
                  <TableRow key={stat[0]}>
                    <TableCell>{stat[0]}</TableCell>
                    <TableCell>
                      <StatBar bgcolor={bgColor} completed={stat[1]} />
                    </TableCell>
                    <TableCell align="center">{stat[2]}</TableCell>
                    <TableCell align="center">{stat[3]}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell width="10%" sx={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {total_stat}
                </TableCell>
                <TableCell width="10%" align="center">
                  Min
                </TableCell>
                <TableCell width="10%" align="center">
                  Max
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default StatTable;
