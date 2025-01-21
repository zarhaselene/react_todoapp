import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { HiBars3BottomLeft } from "react-icons/hi2";

function App() {
  // store the todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // manage text input
  const [inputValue, setInputValue] = useState("");

  // function to add todo
  const addTodo = () => {
    if (!inputValue.trim()) return; // prevent adding empty string
    if (
      todos.some(
        (todo) => todo.title.toLowerCase() === inputValue.toLowerCase()
      )
    )
      return; // prevent duplicate todos
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      done: false,
    };
    setTodos([...todos, newTodo]); // update array with new todo
    setInputValue(""); // clear the input field
  };

  // function to change status of todo
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <header>
        <h1 className=" text-white font-bold">Todo App</h1>
      </header>
      <div className="h-3/4 overflow-hidden max-w-lg mx-auto my-10 p-5 bg-darkBg rounded shadow-lg">
        <div>
          <h2 className="text-2xl mt-8 text-white font-bold text-center">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h2>
          <p className="text-1xl text-gray-500 text-center mb-4">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex gap-2 mb-4 relative">
            <HiBars3BottomLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()} // Enter key to add todo
              className="w-full pl-10 border border-border p-2 rounded bg-darkCard text-gray-300 outline-none"
              placeholder="Add a task..."
            />
            <button
              onClick={addTodo}
              aria-label="Add new task"
              className="bg-darkCard border border-border hover:border-accent text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
        <div className="h-4/5 overflow-y-auto">
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleDone={toggleDone}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
