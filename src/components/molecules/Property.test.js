import React from "react";
import { render } from "@testing-library/react";
import Property from "./Property";

describe("Property component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Property value="Some test value" title="Some test title" />
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully with margin bottom defined", () => {
    const { baseElement } = render(
      <Property value="Some test value" title="Some test title" mb={16} />
    );

    expect(baseElement).toBeTruthy();
  });
});
