import React, { useState } from "react";

import { FormControl, MenuItem, Select } from "@mui/material";

export const RegionSelect = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 200, boxShadow: 3 }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
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
