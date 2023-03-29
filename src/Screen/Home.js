import React from "react";
import styled from "styled-components";
import { dataCountry } from "../services/dataCountry";
import { Card, Filters } from "../components";

export default function Home() {
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

  return (
    <Layout>
      <Filters />
      <Table>
        {dataCountry.map((el, index) => (
          <Card
            flag={el.flags.svg}
            country={el.name}
            population={el.population}
            region={el.region}
            capital={el.capital}
            key={index}
          />
        ))}
      </Table>
    </Layout>
  );
}
