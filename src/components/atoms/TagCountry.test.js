import React from "react";
import { render } from "@testing-library/react";
import TagCountry from "./TagCountry";

describe("TagCountry component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TagCountry country="Country name" />);

    expect(baseElement).toBeTruthy();
  });
  it("should render successfully in dark mode", () => {
    const { baseElement } = render(
      <TagCountry country="Country name" darkMode />
    );

    expect(baseElement).toBeTruthy();
  });
});
