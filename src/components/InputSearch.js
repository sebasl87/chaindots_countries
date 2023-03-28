import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { InputAdornment, TextField } from "@mui/material";

export const InputSearch = ({
  placeHolder = "Search for a country...",
  onClick,
}) => {
  return (
    <TextField
      sx={{ boxShadow: 3, width: "100%", maxWidth: "500px" }}
      id="input-with-sx"
      placeholder={placeHolder}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default InputSearch;
