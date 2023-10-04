import { render, screen } from "../../../test-utils/customRender";

import WhenPplDataFetching from "../whenDataFetching/index";
import MultipleSelectModeOn from "../multipleSelectModeOn/index";
import NoData from "../noData/NoData";

describe("WhenPplDataFetching", () => {
  it("renders test with 'データを取得しています。'", () => {
    render({ ui: <WhenPplDataFetching /> });
    const textContent = screen.getByTestId("text").textContent; // Act
    expect(textContent).toBe("データを取得しています。"); // Assert
  });

  it("renders test with '複数選択中です。確定ボタンをクリックすると、データを取得し、グラフが表示されます。'", () => {
    render({ ui: <MultipleSelectModeOn /> });
    const text = screen.getByTestId("textWhenMultipleSelectModeOn").textContent; // Act
    expect(text).toBe(
      "複数選択中です。確定ボタンをクリックすると、データを取得し、グラフが表示されます。",
    ); // Assert
  });

  it("renders test with '都道府県を選択してください。'", () => {
    render({ ui: <NoData /> });
    const text = screen.getByTestId("noDataText").textContent; // Act
    expect(text).toBe("都道府県を選択してください。"); // Assert
  });
});
