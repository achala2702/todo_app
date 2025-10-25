import React, { createContext, useContext, useEffect, useState } from "react";
import type { Todo } from "../components/TodoCard";
import { GetTodos } from "../api/TodoApis";

type TodoContextType = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const data = await GetTodos();
    if (data) {
      setTodos(data);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used within a TodosProvider");
  return context;
};
