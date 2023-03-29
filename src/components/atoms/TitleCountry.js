import { Box } from "@mui/system";
import React from "react";

export default function TitleCountry({ title, xl }) {
  return (
    <Box
      display="flex"
      fontSize={xl ? 28 : 20}
      fontWeight={700}
      maxWidth={xl ? "100%" : 250}
      mb={xl ? 3 : 2}
      mt={xl ? 4 : 0}
      overflow="hidden"
      textAlign="left"
      textOverflow="ellipsis"
    >
      {title}
    </Box>
  );
}
