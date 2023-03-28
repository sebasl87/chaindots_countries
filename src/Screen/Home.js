import React from "react";
import styled from "styled-components";
import { dataCountry } from "../services/dataCountry";
import { Card } from "../components";

export default function Home() {
  const Table = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media (max-width: 375px) {
      grid-gap: 4rem;
    }
  `;

  const Layout = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `;

  return (
    <Layout>
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
