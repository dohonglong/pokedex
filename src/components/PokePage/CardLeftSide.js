import React from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";

import DataTable from "./CardContent/DataTable";
import NameAndImage from "./CardContent/NameAndImage";

function CardLeftSide({ pokemon }) {
  return (
    <Grid item xs={12} md={5} sx={{ border: "3px solid black" }}>
      <Card className="Card">
        <CardContent>
          <Box component="div">
            {/* Name & Image */}
            <NameAndImage pokemon={pokemon} />
            {/* Data table */}
            <DataTable pokemon={pokemon} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardLeftSide;
