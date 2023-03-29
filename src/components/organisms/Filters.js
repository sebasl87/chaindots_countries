import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../App";
import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "../../services/country-services";

import InputSearch from "../molecules/InputSearch";
import RegionSelect from "../molecules/RegionSelect";

export default function Filters() {
  const { setCountriesData } = useContext(CountryContext);
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleChangeSelect = (event) => {
    setValue(event.target.value);
  };
  const handleChangeInput = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    value.length
      ? fetchCountriesByRegion(value).then((paises) => setCountriesData(paises))
      : fetchAllCountries().then((paises) => setCountriesData(paises));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    searchText.length > 2
      ? fetchCountriesByName(searchText)
          .then((paises) => setCountriesData(paises))
          .catch((err) => console.log(err))
      : fetchAllCountries().then((paises) => setCountriesData(paises));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

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
      <InputSearch handleChange={handleChangeInput} />
      <RegionSelect value={value} handleChange={handleChangeSelect} />
    </Box>
  );
}
