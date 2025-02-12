import { render, screen, fireEvent } from "@testing-library/react";
import NovelBoxContent from "../NovelBoxContent";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("NovelBoxContent", () => {
  const testId = "test-id";
  const testTitle = "test-title";
  const testDescription = "test-description";

  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <NovelBoxContent
        id={testId}
        title={testTitle}
        description={testDescription}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe("when novel box is clicked", () => {
    it("should navigate to its details page", () => {
      render(
        <NovelBoxContent
          id={testId}
          title={testTitle}
          description={testDescription}
        />
      );
      fireEvent.click(screen.getByTestId(`novel-box-container-${testId}`));

      expect(mockPush).toHaveBeenCalledWith(`novel/${testId}`);
    });
  });
});
