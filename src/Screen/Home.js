import React, { useContext } from "react";
import styled from "styled-components";
import { BackBtn, Card, Filters } from "../components";
import { CountryContext } from "../App";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { fetchAllCountries } from "../services/country-services";

const Table = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  @media (max-width: 375px) {
    grid-gap: 2rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export default function Home() {
  const { countriesData, setCountriesData } = useContext(CountryContext);

  if (countriesData?.status === 404 || countriesData === 0) {
    return (
      <Box>
        <BackBtn
          handleClick={() => {
            fetchAllCountries().then((data) => setCountriesData(data));
          }}
        />
        <Typography variant="h4">No hemos encontrado resultados</Typography>
      </Box>
    );
  }
  return (
    <>
      <Layout>
        <Filters />
        <Table>
          {countriesData ? (
            countriesData.map((el) => (
              <Card
                capital={el.capital[0]}
                country={el.name.official}
                flag={el.flags.svg}
                key={el.name.official + "+" + el.idd.suffixes[0]}
                population={el.population}
                region={el.region}
              />
            ))
          ) : (
            <Box width="100%" margin="auto">
              <CircularProgress color="success" />
            </Box>
          )}
        </Table>
      </Layout>
    </>
  );
}
