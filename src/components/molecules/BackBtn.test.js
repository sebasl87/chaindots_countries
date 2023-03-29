import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BackBtn from "./BackBtn";

const handleOnClickMock = jest.fn();
describe("BackBtn component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BackBtn handleClick={handleOnClickMock} />);

    expect(baseElement).toBeTruthy();
    fireEvent.click(screen.getByTestId("ArrowBackIcon"));
    expect(handleOnClickMock).toHaveBeenCalledTimes(1);
  });

  it("should render successfully in dark mode and mobile", () => {
    const { baseElement } = render(<BackBtn darkMode isMobile />);

    expect(baseElement).toBeTruthy();
  });
});
