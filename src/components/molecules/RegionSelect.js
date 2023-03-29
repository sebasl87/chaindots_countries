import React from "react";

import { FormControl, MenuItem, Select } from "@mui/material";

export const RegionSelect = ({ value, handleChange, darkMode }) => {
  return (
    <FormControl sx={{ minWidth: 200, boxShadow: 3 }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        sx={{
          backgroundColor: darkMode && "#202C37",
          color: darkMode && "#fff",
        }}
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor: darkMode && "#202C37",
                color: darkMode && "#fff",
              },
            },
          },
        }}
      >
        <MenuItem value="">
          <em>Filter by Region</em>
        </MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="America">America</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};
export default RegionSelect;
