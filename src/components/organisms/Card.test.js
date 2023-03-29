import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import { CountryContext } from "../../App";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const ActualReactRouterDOM = jest.requireActual("react-router-dom");
  return {
    ...ActualReactRouterDOM,
    useNavigate: () => mockedUsedNavigate,
  };
});
describe("Card component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          darkMode: false,
        }}
      >
        <Card
          flag="https://flagcdn.com/bb.svg"
          country="Uruguay"
          population={54980}
          region="America"
          capital="Montevideo"
        />
      </CountryContext.Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode and click", () => {
    const { baseElement } = render(
      <CountryContext.Provider
        value={{
          darkMode: true,
        }}
      >
        <Card
          flag="https://flagcdn.com/bb.svg"
          country="Uruguay"
          population={54980}
          region="America"
          capital="Montevideo"
        />
      </CountryContext.Provider>
    );
    fireEvent.click(screen.getByRole("img"));
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(baseElement).toBeTruthy();
  });
});
