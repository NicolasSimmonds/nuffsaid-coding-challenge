import React, { createContext, FC, useCallback, useState } from "react";
import { Message } from "../api/Api";
import { countOptions } from "../types";

interface ICount {
  0: number;
  1: number;
  2: number;
}

interface IMessageProvider {
  state: Message[];
  count: ICount;
  clearMessage: (text: string, priority: countOptions) => void;
  clearAll: () => void;
  addMessages: (msg: Message) => void;
  updateCount: (priority: countOptions) => void;
}

const initialCount: ICount = {
  0: 0,
  1: 0,
  2: 0,
};

export const MessagesContext = createContext<IMessageProvider>({
  state: [],
  count: initialCount,
  clearMessage: () => {},
  clearAll: () => {},
  addMessages: () => {},
  updateCount: () => {},
});

const MessagesProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [count, setCount] = useState(initialCount);

  const clearMessage = (text: string, priority: countOptions) => {
    setMessages([...messages.filter((e: Message) => e.message !== text)]);
    setCount((old) => ({
      ...old,
      [priority]: old[priority] - 1,
    }));
  };

  const clearAll = () => {
    setMessages([]);
    setCount(initialCount);
  };

  const addMessages = useCallback((msg: Message) => {
    setMessages((old) => [...old, msg]);
  }, []);

  const updateCount = useCallback((priority: countOptions) => {
    setCount((old) => ({
      ...old,
      [priority]: old[priority] + 1,
    }));
  }, []);

  const value = {
    state: messages,
    count: count,
    clearMessage,
    clearAll,
    addMessages,
    updateCount,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
