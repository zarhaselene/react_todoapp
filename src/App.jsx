import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { BiSolidError } from "react-icons/bi";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) {
      setErrorMessage(
        <div className="flex items-center gap-2 text-error-color">
          <BiSolidError className="text-xl" /> Task cannot be empty.
        </div>
      );
      return;
    }

    if (
      todos.some(
        (todo) => todo.title.toLowerCase() === inputValue.toLowerCase()
      )
    ) {
      setErrorMessage(
        <div className="flex items-center gap-2 text-error-color">
          <BiSolidError className="text-xl" />
          This task already exists!
        </div>
      );
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: inputValue,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setErrorMessage("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <header className="text-center">
        <h1 className="text-text-color font-bold text-3xl">Todo App</h1>
        <p className="text-muted-text text-sm">
          Stay organized, one task at a time.
        </p>
      </header>
      <div className="h-3/4 overflow-hidden max-w-lg mx-auto my-10 p-5 bg-bg-color rounded shadow-lg">
        <div>
          <h2 className="text-2xl mt-8 text-text-color font-bold text-center">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h2>
          <p className="text-1xl text-muted-text text-center mb-4">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex gap-2 my-5 relative">
            <HiBars3BottomLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setErrorMessage("");
              }}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              className="w-full pl-10 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent p-3 rounded bg-input-bg text-text-color outline-none transition-all"
              placeholder="Add a new task..."
            />
            <button
              onClick={addTodo}
              className="bg-primary-accent hover:bg-hover-color text-white hover:text-primary-accent px-5 py-3 rounded transition-all hover:border-primary-accent"
            >
              Add
            </button>
          </div>
          {errorMessage && (
            <p className="my-3 bg-error-color/20 text-error-color px-3 py-2 text-sm rounded animate-fadeIn">
              {errorMessage}
            </p>
          )}
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
