import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const mockClick = jest.fn();

describe("Button", () => {
  test("Renders button and clicks", () => {
    const comp = render(<Button label="test" onClick={mockClick} />);
    const button = comp.getByTestId("button");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(comp.getByText("test")).toBeInTheDocument();
    expect(comp).toBeTruthy();
    expect(comp).toMatchSnapshot();
  });
});
