import React from "react";
import { render } from "@testing-library/react";
import TitleCountry from "./TitleCountry";

describe("TitleCountry component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TitleCountry title="Some title text" />);

    expect(baseElement).toBeTruthy();
  });
  it("should render successfully xl", () => {
    const { baseElement } = render(<TitleCountry title="Some title text" xl />);

    expect(baseElement).toBeTruthy();
  });
});
