"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, make: "Honda", modelsCount: 100 },
  { id: 2, make: "Toyota", modelsCount: 150 },
];

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
