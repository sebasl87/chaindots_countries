import { Box } from "@mui/system";
import React from "react";
import DescriptionProperty from "../atoms/DescriptionProperty";
import TitleProperty from "../atoms/TitleProperty";

export default function Property({ title, value, mb = "4px" }) {
  return (
    <Box display="flex" width="100%" marginBottom={mb}>
      <TitleProperty title={title} />
      <DescriptionProperty value={value} />
    </Box>
  );
}
