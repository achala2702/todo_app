import TodoCard from "./TodoCard";
import type { Todo } from "./TodoCard";

type AllTodosProps={
    todos:Todo[];
}

export default function AllTodos({todos}: AllTodosProps) {
  return (
    <div className=" flex flex-col gap-4 max-h-[calc(100vh-8rem)] overflow-y-scroll scrollbar-hide rounded-lg">
      {todos && todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  );
}
