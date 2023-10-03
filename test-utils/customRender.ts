import { render } from "@testing-library/react";
import { ResasProvider } from "../contexts/ResasContext";
import { ReactElement } from "react";

type customRenderType = {
  ui: ReactElement;
  options?: any;
};
const customRender = ({ ui, options }: customRenderType) =>
  render(ui, { wrapper: ResasProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
