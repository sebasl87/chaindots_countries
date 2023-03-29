import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { InputAdornment, TextField } from "@mui/material";

export const InputSearch = ({
  placeHolder = "Search for a country...",
  handleChange,
  darkMode,
}) => {
  return (
    <TextField
      onChange={handleChange}
      sx={{
        boxShadow: 3,
        width: "100%",
        maxWidth: "500px",
        background: darkMode && "#2B3743",
        input: { color: darkMode && "#fff" },
      }}
      id="input-with-sx"
      placeholder={placeHolder}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: darkMode && "#fff" }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default InputSearch;
