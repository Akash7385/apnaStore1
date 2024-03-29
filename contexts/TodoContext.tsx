"use client";
import React, { createContext, useState, useContext } from "react";

export const TodoContext = createContext(0);

export const TodoProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <TodoContext.Provider value={{ count, setCount }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
