import React from 'react'
import { render } from "@testing-library/react";
import TitleProperty from "./TitleProperty";

describe("Title component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TitleProperty title="Some title text" />);

    expect(baseElement).toBeTruthy();
  });
});
