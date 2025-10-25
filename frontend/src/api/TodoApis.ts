import axios from "axios";
import type { Todo } from "../components/TodoCard";

type AddTodo = {
  title: string;
  description: string;
};

export const GetTodos = async (): Promise<Todo[] | null> => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/todo");
    return res.data;
  } catch (err) {
    console.log("could not able to fetch data", err);
    return null;
  }
};

export const AddTodo = async (todo: AddTodo) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/todo", todo);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const DeleteTodo = async (id: number) => {
  try {
    const res = await axios.delete(`http://localhost:8080/api/v1/todo/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
