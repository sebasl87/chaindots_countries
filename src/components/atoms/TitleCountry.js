import { Box } from "@mui/system";
import React from "react";

export default function TitleCountry({ title }) {
  return (
    <Box
      display="flex"
      fontSize={20}
      fontWeight={700}
      maxWidth={250}
      mb={2}
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {title}
    </Box>
  );
}
