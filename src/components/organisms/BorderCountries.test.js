import React from "react";
import { render } from "@testing-library/react";
import BorderCountries from "./BorderCountries";

export const dataCountry_mocked = [
  {
    flags: {
      png: "https://flagcdn.com/w320/bb.png",
      svg: "https://flagcdn.com/bb.svg",
      alt: "The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.",
    },
    name: {
      common: "Barbados",
      official: "Barbados",
      nativeName: {
        eng: {
          official: "Barbados",
          common: "Barbados",
        },
      },
    },
    idd: {
      root: "+1",
      suffixes: ["246"],
    },
    capital: ["Bridgetown"],
    region: "Americas",
    population: 287371,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/re.png",
      svg: "https://flagcdn.com/re.svg",
      alt: "",
    },
    name: {
      common: "Réunion",
      official: "Réunion Island",
      nativeName: {
        fra: {
          official: "Ile de la Réunion",
          common: "La Réunion",
        },
      },
    },
    idd: {
      root: "+2",
      suffixes: ["62"],
    },
    capital: ["Saint-Denis"],
    region: "Africa",
    population: 840974,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sr.png",
      svg: "https://flagcdn.com/sr.svg",
      alt: "The flag of Suriname is composed of five horizontal bands of green, white, red, white and green in the ratio of 2:1:4:1:2. A large five-pointed yellow star is centered in the red band.",
    },
    name: {
      common: "Suriname",
      official: "Republic of Suriname",
      nativeName: {
        nld: {
          official: "Republiek Suriname",
          common: "Suriname",
        },
      },
    },
    idd: {
      root: "+5",
      suffixes: ["97"],
    },
    capital: ["Paramaribo"],
    region: "Americas",
    population: 586634,
  },
];
describe("BorderCountries component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BorderCountries borderCountriesToMap={dataCountry_mocked} />
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode", () => {
    const { baseElement } = render(
      <BorderCountries
        handleDarkMode
        borderCountriesToMap={dataCountry_mocked}
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
