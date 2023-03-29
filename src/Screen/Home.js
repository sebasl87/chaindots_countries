import React from "react";
import styled from "styled-components";
import { dataCountry } from "../services/dataCountry";
import { Card, Filters } from "../components";

const Table = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  @media (max-width: 375px) {
    grid-gap: 4rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export default function Home() {
  return (
    <Layout>
      <Filters />
      <Table>
        {dataCountry.map((el) => (
          <Card
            capital={el.capital}
            country={el.name}
            flag={el.flags.svg}
            key={el.numericCode}
            population={el.population}
            region={el.region}
          />
        ))}
      </Table>
    </Layout>
  );
}
