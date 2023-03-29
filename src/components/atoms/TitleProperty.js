import React from "react";
import { Box } from "@mui/system";

export default function TitleProperty({ title, ismobile, borderCountries }) {
  return (
    <Box fontWeight={600} mb={ismobile && borderCountries && 2}>
      {title}
    </Box>
  );
}
