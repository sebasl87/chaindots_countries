import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { CountryContext } from "../App";

const mockedUsedNavigate = jest.fn();
jest.mock("../services/country-services", () => ({
  fetchAllCountries: () => Promise.resolve({ data: [{}, {}] }),
}));
jest.mock("../components", () => ({
  Filters: () => {
    return <mock-filters data-testid="filters" />;
  },
}));

jest.mock("react-router-dom", () => {
  const ActualReactRouterDOM = jest.requireActual("react-router-dom");
  return {
    ...ActualReactRouterDOM,
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => ({
      state: {
        countryName: "Uruguay",
      },
    }),
  };
});
describe("Home component", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render successfully", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          countriesData: [],
          setCountriesData: jest.fn,
          darkMode: false,
          isMobile: false,
        }}
      >
        <Home />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode and mobile", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          countriesData: [],
          setCountriesData: jest.fn,
          darkMode: true,
          isMobile: true,
        }}
      >
        <Home />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });
});
