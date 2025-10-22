import AddTodoForm from "./components/AddTodoForm";
import TodoCard from "./components/TodoCard";

function App() {


  return (
    <div className="bg-amber-500 w-screen h-screen p-8 cursor-default">
      <main className="grid grid-cols-1 md:grid-cols-2 bg-amber-700 rounded-lg h-full w-full">
        <section className="flex flex-col items-center bg-amber-800 rounded-l-lg">
          <h1 className="text-6xl font-bold mt-8 mb-10">Todo App</h1>
          <AddTodoForm/>
        </section>
        <section className="p-8">
          <TodoCard/>
        </section>
      </main>
    </div>
  );
}

export default App;
