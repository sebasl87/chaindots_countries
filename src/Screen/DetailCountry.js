import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { BackBtn, BorderCountries, Flag, TitleCountry } from "../components";
import Property from "../components/molecules/Property";

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
  return (
    <Layout>
      <ContainerCard>
        <BackBtn />
        <Box display="flex" justifyContent="space-between" width="100%">
          <Flag flag="https://flagcdn.com/be.svg" xl />
          <Box display="flex" width="100%" flexDirection="column">
            <TitleCountry xl title="Belgium" />
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              mb={6}
            >
              <Box display="flex" flexDirection="column">
                <Property mb="12px" title="Native Name:" value="Belgie" />
                <Property mb="12px" title="Population:" value={3} />
                <Property mb="12px" title="Region:" value="Europe" />
                <Property
                  mb="12px"
                  title="Sub Region:"
                  value="Western Europe"
                />
                <Property mb="12px" title="Capital:" value="Brusells" />
              </Box>
              <Box display="flex" flexDirection="column">
                <Property mb="12px" title="Top Level Domain:" value=".be" />
                <Property mb="12px" title="Currencies:" value="Euro" />
                <Property
                  mb="12px"
                  title="Languages:"
                  value="Dutch, French, German"
                />
              </Box>
            </Box>
            <BorderCountries borderCountriesToMap={borderCountriesToMap} />
          </Box>
        </Box>
      </ContainerCard>
    </Layout>
  );
}
