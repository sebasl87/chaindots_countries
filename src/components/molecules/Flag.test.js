import React from "react";
import { render } from "@testing-library/react";
import Flag from "./Flag";

describe("Flag component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Flag value="https://flagcdn.com/al.svg" />);

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully in xl and mobile", () => {
    const { baseElement } = render(
      <Flag value="https://flagcdn.com/al.svg" xl isMobile />
    );

    expect(baseElement).toBeTruthy();
  });
});
