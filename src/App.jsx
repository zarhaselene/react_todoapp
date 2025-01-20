import { useState } from "react";
import "./App.css";

function App() {
  // store the todos
  const [todos, setTodos] = useState([]);
  // manage text input
  const [inputValue, setInputValue] = useState("");

  // function to add todo
  const addTodo = () => {
    if (!inputValue.trim()) return;  // prevent adding empty string
    const newTodo = {
      id: Date.now(), // ID set by using the current time
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
      <h1>hello</h1>
    </>
  );
}

export default App;
