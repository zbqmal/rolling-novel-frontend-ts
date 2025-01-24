import { render } from "@testing-library/react";
import PageContentContainer from "../PageContentContainer";

describe("PageContentContainer", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PageContentContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
