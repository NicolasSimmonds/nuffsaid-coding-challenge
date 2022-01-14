import { render, fireEvent, screen } from "@testing-library/react";
import { MessagesContext } from "../context/messages";
import MessagesContainer from "./MessagesContainer";

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
        <MessagesContainer />
      </MessagesContext.Provider>
    );
    expect(comp.getByText("test error")).toBeInTheDocument();
    expect(comp.getByText("test error 2")).toBeInTheDocument();
    expect(comp.getByText("test warning")).toBeInTheDocument();
    expect(comp.getByText("test info")).toBeInTheDocument();
    expect(comp.getByText("Count 2")).toBeInTheDocument();
    expect(comp.getAllByText("Count 1")).toHaveLength(2);
  });
});
