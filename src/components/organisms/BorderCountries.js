import { Box } from "@mui/system";
import React from "react";
import TagCountry from "../atoms/TagCountry";
import TitleProperty from "../atoms/TitleProperty";

export default function BorderCountries({
  borderCountriesToMap,
  handleDarkMode,
  isMobile,
}) {
  return (
    <Box
      alignItems={isMobile ? "flex-start" : "center"}
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      width="100%"
    >
      <TitleProperty
        borderCountries
        isMobile={isMobile}
        title="Border Countries:"
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth={isMobile ? "100%" : 300}
        pl={isMobile ? 0 : 2}
      >
        {borderCountriesToMap.length &&
          borderCountriesToMap.map((el, index) => (
            <TagCountry
              key={index}
              country={el.name.common}
              darkMode={handleDarkMode}
            />
          ))}
      </Box>
    </Box>
  );
}
