import Button from "./Button";
import { Icon } from "@iconify/react";
import { DeleteTodo } from "../api/TodoApis";
import { toast } from "react-toastify";
import { useTodos } from "../context/TodoContext";

export type Todo = {
  id: number;
  title: string;
  description: string;
};

type todoProps = {
  todo: Todo;
};

export default function TodoCard({ todo }: todoProps) {
  const {fetchTodos} = useTodos();
  const deleteTodo = async () => {
    const result = await DeleteTodo(todo.id);

    if (result) {
      toast.success("Todo completed!");
      fetchTodos();
    } else {
      toast.error("Failed to delete todo");
    }
  };

  return (
    <div className=" bg-red-100 rounded-lg flex items-center justify-between p-4 lg:p-8 hover:shadow-lg transition-shadow duration-150">
      <div className="gap-2">
        <h1 className="text-lg lg:text-2xl font-bold">{todo.title}</h1>
        <p className="text-xs lg:text-lg">{todo.description}</p>
      </div>
      <Button onClick={deleteTodo} className="">
        <Icon icon="weui:done2-filled" width="20" height="20" />
        Done
      </Button>
    </div>
  );
}
