import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { AddTodo } from "../api/TodoApis";
import { toast } from "react-toastify";
import { useTodos } from "../context/TodoContext";

export default function AddTodoForm() {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { fetchTodos } = useTodos();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = await AddTodo(todo);

    if (result) {
      toast.success("Todo Added!");
      setTodo({ title: "", description: "" });
      fetchTodos();
    } else {
      toast.error("Failed to add todo");
    }
  };

  return (
    <form className="flex flex-col items-center justify-center bg-amber-100 w-4/5 lg:w-2/3 rounded-lg gap-6 p-4 md:p-8 hover:shadow-lg transition-shadow duration-150">
      <input
        type="text"
        name="title"
        className="bg-white focus:outline-none rounded-md p-2 w-full"
        placeholder="Title"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        className="bg-white h-32 focus:outline-none rounded-md p-2 w-full"
        placeholder="Description"
        value={todo.description}
        onChange={handleChange}
      />
      <Button onClick={addTodo} className="bg-amber-200 w-full">
        <Icon icon="mingcute:add-circle-fill" width="24" height="24" />
        Add
      </Button>
    </form>
  );
}
