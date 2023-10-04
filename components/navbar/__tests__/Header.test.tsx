import { render, screen } from "../../../test-utils/customRender";
import Header from "../header/index";
import Navbar from "..";

describe("Header", () => {
  it("should render navbar", () => {
    render({ui: <Navbar />}); // Arrange
    const navbar = screen.getByRole("navigation"); // Act
    expect(navbar).toBeInTheDocument(); // Assert
  });

  it("should render 都道府県別の人口推移 as a heading", () => {
    render({ui: <Header title="都道府県別の人口推移" />}); // Arrange
    const header = screen.getByRole("heading", {
      name: "都道府県別の人口推移",
    }); // Act
    expect(header).toBeInTheDocument(); // Assert
  });

  it("should render test as a heading", () => {
    render({ui: <Header title="test" />}); // Arrange
    const header = screen.getByRole("heading", {
      name: "test",
    }); // Act
    expect(header).toBeInTheDocument(); // Assert
  });
});
