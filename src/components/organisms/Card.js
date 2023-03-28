import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Flag from "../atoms/Flag";
import TitleCountry from "../atoms/TitleCountry";
import Property from "../molecules/Property";

const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  background: #fff;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 24px;
  border-radius: 6px;
  box-shadow: 7px 6px 5px -2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 7px 6px 5px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 7px 6px 5px -2px rgba(0, 0, 0, 0.1);
`;

const ContainerText = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 24px 48px;
  flex-direction: column;
`;

const Card = ({ flag, country, population, region, capital }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <ContainerCard>
        <Flag flag={flag} />
        <ContainerText>
          <TitleCountry title={country} />
          <Property title="Population:" value={population.toLocaleString()} />
          <Property title="Region:" value={region} />
          <Property title="Capital:" value={capital} />
        </ContainerText>
      </ContainerCard>
    </Box>
  );
};

export default Card;
