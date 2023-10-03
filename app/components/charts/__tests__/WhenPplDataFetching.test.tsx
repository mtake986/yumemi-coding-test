import { render, screen } from "@testing-library/react";
import WhenPplDataFetching from "../whenDataFetching/index";

// import your context; it will include the provider
import { ResasProvider } from "../../../../contexts/ResasContext";

describe("WhenPplDataFetching", () => {
  it("renders test with 'データを取得しています。'", () => {
    render(<WhenPplDataFetching />, { wrapper: ResasProvider });
    const textContent = screen.getByTestId("text").textContent; // Act
    expect(textContent).toBe("データを取得しています。"); // Assert
  });
});
