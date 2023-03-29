import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header({ handleClick, darkMode, isMobile }) {
  return (
    <header>
      <Box
        alignItems="center"
        display="flex"
        fontSize="calc(10px + 2vmin)"
        justifyContent="space-between"
        maxHeight="10vh"
        padding={isMobile ? "0 16px" : "0 48px"}
        sx={{
          boxShadow: "0 4px 3px -3px rgb(194, 194, 194)",
        }}
      >
        <Box
          fontSize={isMobile ? "16px" : "24px"}
          fontWeight="700"
          textAlign="left"
          marginY={4}
        >
          Where in the world?
        </Box>
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
          <Box fontSize={isMobile ? "14px" : "16px"}>Dark Mode</Box>
        </Box>
      </Box>
    </header>
  );
}
