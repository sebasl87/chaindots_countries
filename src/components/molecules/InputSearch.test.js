import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputSearch from "./InputSearch";

const handleChangeMocked = jest.fn();
describe("InputSearch component", () => {
  it("should render successfully and change to search", async () => {
    const { baseElement } = render(
      <InputSearch
        placeHolder="Some placeholder test"
        handleChange={handleChangeMocked}
      />
    );

    const inputBox = screen.getByRole("textbox");
    fireEvent.change(inputBox, { target: { value: "Mexico" } });

    expect(baseElement).toBeTruthy();
    expect(handleChangeMocked).toHaveBeenCalledTimes(1);
  });

  it("should render successfully in dark mode with custom place holder", async () => {
    const { baseElement } = render(
      <InputSearch handleChange={handleChangeMocked} darkMode />
    );

    expect(baseElement).toBeTruthy();
  });
});
