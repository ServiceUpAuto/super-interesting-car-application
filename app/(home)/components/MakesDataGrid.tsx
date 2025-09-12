"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { makesAndModels } from "../../../data/makesAndModels";
import { Box, Typography } from "@mui/material";

const rows: GridRowsProp = makesAndModels.map(({ id, name, models }) => ({
  id,
  make: name,
  modelsCount: models.length,
}));

const columns: GridColDef[] = [
  { field: "make", headerName: "Make", width: 200 },
  { field: "modelsCount", headerName: "# of Models", width: 300 },
];

const findMaxNum = (x) => {
  const mymax = 0;
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] > mymax) {
      mymax = arr[i];
    } else {
      continue;
    }
  }
  return mymax;
};

export function MakesDataGrid() {
  const data = [];
  for (const make of makesAndModels) {
    data.push(make.models.length);
  }

  const max = findMaxNum(data);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
      <Box mt={4}>
        <Typography>
          It&apos;s super important for you to know that the make with the
          greatest number of models has <strong>{max}</strong> models!
        </Typography>
      </Box>
    </div>
  );
}
