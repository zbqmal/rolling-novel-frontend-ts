import { render } from "@testing-library/react";
import PageContentContainer from "../PageContentContainer";
import React from "react";

describe("PageContentContainer", () => {
  const testWidth = "test-width";
  const testHeight = "test-height";

  it("matches snapshot", () => {
    const { asFragment } = render(
      <PageContentContainer width={testWidth} height={testHeight} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
