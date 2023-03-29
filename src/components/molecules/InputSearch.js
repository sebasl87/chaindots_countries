import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { InputAdornment, TextField } from "@mui/material";

export const InputSearch = ({
  placeHolder = "Search for a country...",
  handleChange,
  darkMode,
  isMobile
}) => {
  return (
    <TextField
      onChange={handleChange}
      sx={{
        background: darkMode && "#2B3743",
        boxShadow: 3,
        input: { color: darkMode && "#fff" },
        marginBottom: isMobile && "32px",
        marginRight: !isMobile && "16px",
        maxWidth: "500px",
        width: "100%",

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
