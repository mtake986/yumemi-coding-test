import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "@/components/header";

describe("rendering", () => {
  it("Should render Hello text", () => {
    render(<Header />);
    expect(screen.getByText("都道府県別の人口推移")).toBeInTheDocument();
  });
});
