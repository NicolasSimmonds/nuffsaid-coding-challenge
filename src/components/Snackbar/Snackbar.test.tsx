import { fireEvent, render } from "@testing-library/react";
import Snackbar from "./Snackbar";

const mockClose = jest.fn();

describe("Snackbar", () => {
  test("Renders Snackbar", () => {
    const comp = render(<Snackbar message="test" onClose={mockClose} open />);
    const button = comp.getByRole("button");
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(comp.getByText("test")).toBeInTheDocument();
    expect(comp).toMatchSnapshot();
  });
});
