import { render, fireEvent, screen } from "@testing-library/react";
import { MessagesContext } from "./context/messages";
import App from "./App";

const state = [
  {
    message: "test error",
    priority: 0,
  },
  {
    message: "test error 2",
    priority: 0,
  },
  {
    message: "test warning",
    priority: 1,
  },
  {
    message: "test info",
    priority: 2,
  },
];

const initialCount = {
  0: 2,
  1: 1,
  2: 1,
};

const mockFunc = jest.fn();

const value = {
  state,
  count: initialCount,
  clearMessage: mockFunc,
  clearAll: mockFunc,
  addMessages: mockFunc,
  updateCount: mockFunc,
};

describe("Test Messages container", () => {
  test("Renders All messages", () => {
    const comp = render(
      <MessagesContext.Provider value={value}>
        <App />
      </MessagesContext.Provider>
    );
    expect(comp).toBeTruthy();
    const btns = comp.getAllByTestId("button");
    expect(btns[0]).toHaveTextContent("STOP");
    expect(btns[1]).toHaveTextContent("CLEAR");
    fireEvent.click(btns[0]);
    expect(btns[0]).toHaveTextContent("START");
  });
});
