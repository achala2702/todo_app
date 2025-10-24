import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";

type AddTodoFormProps = {
  refreshTodos:()=>void;
}

export default function AddTodoForm({refreshTodos}: AddTodoFormProps) {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/todo", todo);
      if(res.status===201) {
        toast.success(res.data)
        setTodo({ title: "", description: "" })
        refreshTodos();
      }else{
        toast.error(res.data.errors)
      }
      
    } catch (err) {
      toast.error("Error occured while adding todo")
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
