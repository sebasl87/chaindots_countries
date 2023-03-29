import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../App";
import {
  fetchAllCountries,
  fetchCountriesByRegion,
} from "../../services/country-services";

import InputSearch from "../molecules/InputSearch";
import RegionSelect from "../molecules/RegionSelect";

export default function Filters() {
  const { setCountriesData } = useContext(CountryContext);
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  useEffect(() => {
    value.length
      ? fetchCountriesByRegion(value).then((paises) => setCountriesData(paises))
      : fetchAllCountries().then((paises) => setCountriesData(paises));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 2,
        marginX: "16px",
        maxWidth: "-webkit-fill-available",
        width: "100%",
      }}
    >
      <InputSearch />
      <RegionSelect value={value} handleChange={handleChange} />
    </Box>
  );
}
