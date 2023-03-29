import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Header() {
  return (
    <header className="App-header">
      <p className="App-title">Where in the world?</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DarkModeOutlinedIcon style={{ marginRight: 10 }} />
        <p className="App-darkMode">Dark Mode</p>
      </div>
    </header>
  );
}
