import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";

export default function AddTodoForm() {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: [e.target.value] });
  };
  return (
    <form className="flex flex-col items-center justify-center bg-amber-100 w-2/3 rounded-lg gap-6 p-8 hover:shadow-lg transition-shadow duration-150">
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
      <Button className="bg-amber-200 w-full">
        <Icon icon="mingcute:add-circle-fill" width="24" height="24" />
        Add
      </Button>
    </form>
  );
}
