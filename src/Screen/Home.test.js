import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { CountryContext } from "../App";

const mockedUsedNavigate = jest.fn();
jest.mock("../services/country-services", () => ({
  fetchAllCountries: () => Promise.resolve({ data: [{}, {}] }),
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
        }}
      >
        <Home />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode and click", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          darkMode: true,
          isMobile: true,
        }}
      >
        <Home />
      </CountryContext.Provider>
    );

    fireEvent.click(screen.getByTestId("ArrowBackIcon"));
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(baseElement).toBeTruthy();
  });
});
