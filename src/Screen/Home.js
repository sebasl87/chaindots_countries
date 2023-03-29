import React, { useContext } from "react";
import styled from "styled-components";
import { dataCountry } from "../services/dataCountry";
import { Card, Filters } from "../components";
import { CountryContext } from "../App";

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
  const { countries } = useContext(CountryContext);

  return (
    <>
      <Layout>
        <Filters />
        <Table>
          {countries &&
            countries.map((el) => (
              <Card
                capital={el.capital[0]}
                country={el.name.official}
                flag={el.flags.svg}
                key={el.name.official + "+" + el.idd.suffixes[0]}
                population={el.population}
                region={el.region}
              />
            ))}
        </Table>
      </Layout>
    </>
  );
}
