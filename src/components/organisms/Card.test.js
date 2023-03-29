import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

export const dataCountry_mocked = [
  {
    name: {
      common: "Uruguay",
      official: "Oriental Republic of Uruguay",
      nativeName: {
        spa: {
          official: "República Oriental del Uruguay",
          common: "Uruguay",
        },
      },
    },
    tld: [".uy"],
    currencies: {
      UYU: {
        name: "Uruguayan peso",
        symbol: "$",
      },
    },
    capital: ["Montevideo"],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },
    borders: ["ARG", "BRA"],
    population: 3473727,
  },
];

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ({ }), // what you want to return when useContext get fired goes here
  }
})
describe("Card component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Card
        flag="https://flagcdn.com/bb.svg"
        country="Uruguay"
        population={54980}
        region="America"
        capital="Montevideo"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
