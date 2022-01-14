import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("Renders Header", () => {
    const comp = render(<Header />);
    expect(comp.getByText("nuffsaid.com Coding Challenge")).toBeInTheDocument();
    expect(comp).toMatchSnapshot();
  });
});
