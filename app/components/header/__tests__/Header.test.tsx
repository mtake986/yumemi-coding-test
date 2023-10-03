import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("Header", () => {
  it("should render 都道府県別の人口推移 as a heading", () => {
    render(<Header title="都道府県別の人口推移" />); // Arrange
    const header = screen.getByRole("heading", {
      name: "都道府県別の人口推移",
    }); // Act
    expect(header).toBeInTheDocument(); // Assert
  });

  it("should render test as a heading", () => {
    render(<Header title="test" />); // Arrange
    const header = screen.getByRole("heading", {
      name: "test",
    }); // Act
    expect(header).toBeInTheDocument(); // Assert
  });
});
