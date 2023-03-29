import { Box } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { BackBtn, BorderCountries, Flag, TitleCountry } from "../components";
import Property from "../components/molecules/Property";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchCountryBorders,
  fetchCountryByName,
} from "../services/country-services";
import { CircularProgress } from "@mui/material";

const borderCountriesToMap = [
  { country: "France" },
  { country: "Germany" },
  { country: "Netherlands" },
];

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
`;

const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default function DetailCountry() {
  const navigate = useNavigate();
  const {
    state: { countryName },
  } = useLocation();

  const [countryData, setCountryData] = useState();
  const [borders, setBorders] = useState([]);

  const fetchDataForCountry = async () => {
    const data = await fetchCountryByName(countryName);
    setCountryData(data[0]);
  };

  useEffect(() => {
    countryName && fetchDataForCountry();
  }, [countryName]);

  useEffect(() => {
    countryData &&
      countryData.borders.length &&
      fetchCountryBorders(countryData.borders.toString()).then((data) =>
        setBorders(data)
      );
  }, [countryData]);

  const countryInformation = useMemo(() => countryData, [countryData]);

  return (
    <Layout>
      <ContainerCard>
        <BackBtn handleClick={() => navigate(-1)} />
        {countryInformation ? (
          <Box display="flex" justifyContent="space-between" width="100%">
            <Flag flag={countryInformation?.flags.svg} xl />
            <Box display="flex" width="100%" flexDirection="column">
              <TitleCountry xl title={countryInformation?.name.official} />
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                mb={6}
              >
                <Box display="flex" flexDirection="column">
                  <Property mb="12px" title="Native Name:" value="Belgie" />
                  <Property
                    mb="12px"
                    title="Population:"
                    value={countryInformation?.population.toLocaleString()}
                  />
                  <Property
                    mb="12px"
                    title="Region:"
                    value={countryInformation?.region}
                  />
                  <Property
                    mb="12px"
                    title="Sub Region:"
                    value={countryInformation?.subregion}
                  />
                  <Property
                    mb="12px"
                    title="Capital:"
                    value={countryInformation?.capital[0]}
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Property
                    mb="12px"
                    title="Top Level Domain:"
                    value={countryInformation?.tld[0]}
                  />
                  <Property
                    mb="12px"
                    title="Currencies:"
                    value={
                      Object.values(countryInformation?.currencies)[0].name
                    }
                  />
                  <Property
                    mb="12px"
                    title="Languages:"
                    value={Object.values(countryInformation?.languages).join(
                      ", "
                    )}
                  />
                </Box>
              </Box>
              {borders ? (
                <BorderCountries borderCountriesToMap={borders} />
              ) : (
                <CircularProgress color="success" />
              )}
            </Box>
          </Box>
        ) : (
          <Box width="100%" margin="auto">
            <CircularProgress color="success" />
          </Box>
        )}
      </ContainerCard>
    </Layout>
  );
}
