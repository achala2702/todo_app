import TodoCard from "./TodoCard";
import { useTodos } from "../context/TodoContext";

export default function AllTodos() {
  const {todos} = useTodos();
  return (
    <div className=" flex flex-col gap-4 max-h-[calc(100vh-8rem)] overflow-y-scroll scrollbar-hide rounded-lg">
      {todos && todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  );
}
