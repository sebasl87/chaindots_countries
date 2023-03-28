import React from "react";

import { FormControl, MenuItem, Select } from "@mui/material";

export const RegionSelect = () => {
  const [value, setValue] = React.useState('');
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
        <MenuItem value={10}>Africa</MenuItem>
        <MenuItem value={20}>America</MenuItem>
        <MenuItem value={30}>Asia</MenuItem>
        <MenuItem value={30}>Europe</MenuItem>
        <MenuItem value={30}>Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};
export default RegionSelect;
