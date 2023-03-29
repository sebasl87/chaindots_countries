import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header({ handleClick, darkMode }) {
  return (
    <header className="App-header">
      <p className="App-title">Where in the world?</p>
      <Box
        display="flex"
        alignItems="center"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      >
        {darkMode ? (
          <DarkModeIcon style={{ marginRight: 10 }} />
        ) : (
          <DarkModeOutlinedIcon style={{ marginRight: 10 }} />
        )}
        <p className="App-darkMode">Dark Mode</p>
      </Box>
    </header>
  );
}
