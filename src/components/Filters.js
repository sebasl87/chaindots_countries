import { Box } from "@mui/system";
import React from "react";

import InputSearch from "./InputSearch";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
      }}
    >
      <InputSearch />
    </Box>
  );
}
