// import { render, screen } from "@testing-library/react";
import { tabValues } from "@/public/constants";
import { render, screen, waitForElementToBeRemoved } from "../../../test-utils/customRender";
import Tabs from "../index";
import Tab from "../tab";

describe("Tabs", () => {
  it("should render a section", async () => {
    // render({ ui: <Tabs /> }); // Arrange
    // const section = screen.getByTestId("section"); // Act
    // expect(section).toBeInTheDocument(); // Assert
    render({ ui: <Tabs /> });
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
