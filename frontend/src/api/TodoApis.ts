import axios from "axios";
import type { Todo } from "../components/TodoCard";

export const GetTodos = async (): Promise<Todo[] | null> => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/todo");
    return res.data;
  } catch (err) {
    console.log("could not able to fetch data", err);
    return null;
  }
};
