import { Box } from "@mui/system";
import React from "react";
import DescriptionProperty from "../atoms/DescriptionProperty";
import TitleProperty from "../atoms/TitleProperty";

export default function Property({ title, value }) {
  return (
    <Box display="flex" width="100%" marginBottom="4px">
      <TitleProperty title={title} />
      <DescriptionProperty value={value} />
    </Box>
  );
}
