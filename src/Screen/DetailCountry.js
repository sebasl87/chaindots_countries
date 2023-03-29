import { Box } from "@mui/system";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { BackBtn, BorderCountries, Flag, TitleCountry } from "../components";
import Property from "../components/molecules/Property";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchCountryBorders,
  fetchCountryByName,
} from "../services/country-services";
import { CircularProgress } from "@mui/material";
import { CountryContext } from "../App";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function DetailCountry() {
  const { darkMode, isMobile } = useContext(CountryContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <BackBtn
          handleClick={() => navigate(-1)}
          darkMode={darkMode}
          flexDirection={isMobile ? "column" : "row"}
          isMobile={isMobile}
        />
        {countryInformation ? (
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-between"
            width="100%"
          >
            <Flag flag={countryInformation?.flags.svg} xl isMobile={isMobile} />
            <Box display="flex" width="100%" flexDirection="column">
              <TitleCountry xl title={countryInformation?.name.official} />
              <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent="space-between"
                mb={5}
                width="100%"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  width={isMobile ? "100%" : "50%"}
                  marginRight={isMobile ? 0 : "8px"}
                >
                  <Property
                    mb="12px"
                    title="Native Name:"
                    value={countryInformation?.name.official}
                  />
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
                <Box
                  display="flex"
                  flexDirection="column"
                  width={isMobile ? "100%" : "50%"}
                  mt={isMobile && 5}
                >
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
                <BorderCountries
                  borderCountriesToMap={borders}
                  handleDarkMode={darkMode}
                  isMobile={isMobile}
                />
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
