import { Box } from "@mui/system";
import React from "react";

import InputSearch from "./InputSearch";
import RegionSelect from "./RegionSelect";

export default function Header() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent:"space-between",
        width: "100%",
      }}
    >
      <InputSearch />
      <RegionSelect />
    </Box>
  );
}
