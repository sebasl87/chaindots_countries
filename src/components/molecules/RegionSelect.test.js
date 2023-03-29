import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RegionSelect from "./RegionSelect";

const handleChangeMocked = jest.fn();
describe("RegionSelect component", () => {
  it("should render successfully and select country", async () => {
    const { baseElement } = render(
      <RegionSelect
        value="America"
        handleChange={handleChangeMocked}
      />
    );

    const options = screen.getAllByRole("button");
    fireEvent.mouseDown(options[0]);
    fireEvent.click(screen.getByText(`Asia`));
    expect(baseElement).toBeTruthy();
    expect(handleChangeMocked).toHaveBeenCalledTimes(1);
  });

  it("should render successfully in dark mode", async () => {
    const { baseElement } = render(
      <RegionSelect
        value="America"
        handleChange={handleChangeMocked}
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
