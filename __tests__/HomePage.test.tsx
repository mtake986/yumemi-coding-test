import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Home", () => {
  it("should have test text", () => {
    render(<HomePage />); // Arrange
    const myElem = screen.getByText("test"); // Act

    expect(myElem).toBeInTheDocument(); // Assert
  });

  it("should have test text", () => {
    render(<HomePage />); // Arrange
    const myElem = screen.getByText("test"); // Act

    expect(myElem).toBeInTheDocument(); // Assert
  });
});
