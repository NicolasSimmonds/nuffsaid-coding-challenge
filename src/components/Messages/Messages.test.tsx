import { render, fireEvent } from "@testing-library/react";
import Message from "./Messages";

const mockClear = jest.fn();

describe("Message", () => {
  test("Renders Messages Error", () => {
    const comp = render(<Message text="test" clear={mockClear} priority={0} />);
    const button = comp.getByTestId("message-button");
    fireEvent.click(button);
    expect(comp.getByText("test")).toBeInTheDocument();
    expect(mockClear).toHaveBeenCalledTimes(1);
    expect(comp).toBeTruthy();
    expect(comp).toMatchSnapshot();
  });
  test("Renders Messages Warning", () => {
    const comp = render(<Message text="test" clear={mockClear} priority={1} />);
    const button = comp.getByTestId("message-button");
    fireEvent.click(button);
    expect(comp.getByText("test")).toBeInTheDocument();
    expect(mockClear).toHaveBeenCalledTimes(1);
    expect(comp).toBeTruthy();
    expect(comp).toMatchSnapshot();
  });
  test("Renders Messages Info", () => {
    const comp = render(<Message text="test" clear={mockClear} priority={2} />);
    const button = comp.getByTestId("message-button");
    fireEvent.click(button);
    expect(comp.getByText("test")).toBeInTheDocument();
    expect(mockClear).toHaveBeenCalledTimes(1);
    expect(comp).toBeTruthy();
    expect(comp).toMatchSnapshot();
  });
});
