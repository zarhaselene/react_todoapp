import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const TodoItem = ({ todo, toggleDone, removeTodo }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-darkCard rounded mb-2 shadow text-white">
      <div className="flex justify-between w-full">
        <p className={` ${todo.done ? "line-through text-gray-500" : ""}`}>
          {todo.title}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => toggleDone(todo.id)}
            className={`flex items-center justify-center px-2 py-1 rounded hover:border-accent ${
              todo.done
                ? "bg-darkBg border-1"
                : "bg-darkBg border-darkBg border-1"
            }`}
          >
            {todo.done ? (
              <FaCheck className="text-xs" />
            ) : (
              <FaCheck className="text-xs invisible" />
            )}
          </button>

          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-accent text-white px-2 py-1 rounded hover:border-darkBg hover:bg-darkBg hover:text-accent"
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
