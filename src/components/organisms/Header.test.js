import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

const handleOnClickMock = jest.fn();

describe("Header component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Header
        handleClick={handleOnClickMock}
        darkMode={false}
        isMobile={false}
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in dark mode and click", () => {
    const { baseElement } = render(
      <Header handleClick={handleOnClickMock} darkMode isMobile />
    );
    fireEvent.click(screen.getByText("Dark Mode"));
    expect(handleOnClickMock).toHaveBeenCalledTimes(1);
    expect(baseElement).toBeTruthy();
  });
});
