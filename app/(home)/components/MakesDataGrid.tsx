"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { makesAndModels } from "../../../data/makesAndModels";

const rows: GridRowsProp = makesAndModels.map(({ id, name, models }) => ({
  id,
  make: name,
  modelsCount: models.length,
}));

const columns: GridColDef[] = [
  { field: "make", headerName: "Make", width: 200 },
  { field: "modelsCount", headerName: "# of Models", width: 300 },
];

export function MakesDataGrid() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
