import React from "react";
import { render } from "@testing-library/react";
import Filters from "./Filters";
import { CountryContext } from "../../App";

jest.mock("../../services/country-services", () => ({
  fetchAllCountries: () => Promise.resolve({ data: [] }),
  fetchCountriesByName: () => Promise.resolve({ data: [] }),
  fetchCountriesByRegion: () => Promise.resolve({ data: [] }),
}));
describe("Filters component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          setCountriesData: jest.fn,
          darkMode: false,
          isMobile: false,
        }}
      >
        <Filters />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode and mobile", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          setCountriesData: jest.fn,
          darkMode: true,
          isMobile: true,
        }}
      >
        <Filters />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
  });
});
