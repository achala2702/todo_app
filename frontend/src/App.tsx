import AddTodoForm from "./components/AddTodoForm";
import AllTodos from "./components/AllTodos";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useTodos } from "./context/TodoContext";

function App() {
  const { fetchTodos } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="bg-amber-500 w-full min-h-screen h-full p-8 cursor-default">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="grid grid-cols-1 md:grid-cols-2 bg-amber-800 rounded-lg h-full w-full min-h-[calc(100vh-4rem)]">
        <section className="flex flex-col items-center bg-amber-700 rounded-t-lg md:rounded-l-lg md:rounded-r-none pb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold my-4 md:mt-8 md:mb-10">
            Todo App
          </h1>
          <AddTodoForm />
        </section>
        <section className="p-8">
          <AllTodos />
        </section>
      </main>
    </div>
  );
}

export default App;
