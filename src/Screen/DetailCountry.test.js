import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DetailCountry from "./DetailCountry";
import { CountryContext } from "../App";

const mockedUsedNavigate = jest.fn();
jest.mock("../services/country-services", () => ({
  fetchCountryBorders: () => Promise.resolve({ data: [] }),
  fetchCountryByName: () => Promise.resolve({ data: [] }),
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
describe("DetailCountry component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          darkMode: false,
          isMobile: false,
        }}
      >
        <DetailCountry />
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
        <DetailCountry />
      </CountryContext.Provider>
    );

    fireEvent.click(screen.getByTestId("ArrowBackIcon"));
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(baseElement).toBeTruthy();
  });
});
