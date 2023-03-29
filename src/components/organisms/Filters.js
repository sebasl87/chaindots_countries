import { Box } from "@mui/system";
import React from "react";

import InputSearch from "../molecules/InputSearch";
import RegionSelect from "../molecules/RegionSelect";

export default function Header() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent:"space-between",
        marginBottom: 2,
        width: "100%",
      }}
    >
      <InputSearch />
      <RegionSelect />
    </Box>
  );
}