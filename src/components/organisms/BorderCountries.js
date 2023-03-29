import { Box } from "@mui/system";
import React from "react";
import TagCountry from "../atoms/TagCountry";
import TitleProperty from "../atoms/TitleProperty";

export default function BorderCountries({ borderCountriesToMap }) {
  return (
    <Box width="100%" alignItems="center" display="flex">
      <TitleProperty title="Border Countries:" />
      <Box pl={2} display="flex">
        {borderCountriesToMap.map((el, index) => (
          <TagCountry key={index} country={el.country} />
        ))}
      </Box>
    </Box>
  );
}
