import React from "react";
import { render } from "@testing-library/react";
import DescriptionProperty from "./DescriptionProperty";

describe("DescriptionProperty component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <DescriptionProperty value="Some value text" />
    );

    expect(baseElement).toBeTruthy();
  });
});
