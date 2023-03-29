import { Box } from "@mui/system";
import React from "react";

export default function TitleCountry({ title, xl }) {
  return (
    <Box
      display="flex"
      fontSize={xl ? 28 : 20}
      fontWeight={700}
      maxWidth={250}
      mb={xl ? 3 : 2}
      mt={xl ? 5 : 0}
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {title}
    </Box>
  );
}
