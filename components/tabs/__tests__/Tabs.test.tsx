// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../utils/test-utils";
import Tabs from "../index";
import { ResasProvider } from "@/contexts/ResasContext";
import Tab from "../tab";
import { tabValues } from "@/public/constants";

describe("Tabs", () => {
  it("should render a section", () => {
    render({ ui: <Tabs /> }); // Arrange
    const tab = screen.getByTestId("section"); // Act
    expect(tab).toBeInTheDocument(); // Assert
  });

  it("should render 4 buttons", () => {
    render({ ui: <Tabs /> }); // Arrange
    const tabs = screen.getAllByRole("button"); // Act
    expect(tabs).toHaveLength(4); // Assert
  });

  it("should render a tab", () => {
    render({ ui: <Tab tabValue={tabValues[0]} /> }); // Arrange
    const tab = screen.getByRole("button"); // Act
    expect(tab).toBeInTheDocument(); // Assert
  });
});
