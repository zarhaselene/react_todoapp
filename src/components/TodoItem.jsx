import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const TodoItem = ({ todo, toggleDone, removeTodo }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-card-bg rounded mb-2 shadow text-text-color">
      <div className="flex justify-between w-full">
        <p className={`${todo.done ? "line-through text-muted-text" : ""}`}>
          {todo.title}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => toggleDone(todo.id)}
            className={`flex items-center justify-center px-2 py-1 rounded hover:border-primary-accent ${
              todo.done
                ? "bg-bg-color border border-primary-accent"
                : "bg-bg-color border border-bg-color"
            }`}
          >
            {todo.done ? (
              <FaCheck className="text-xs text-primary-accent" />
            ) : (
              <FaCheck className="text-xs invisible" />
            )}
          </button>

          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-primary-accent text-white px-2 py-1 rounded hover:bg-bg-color hover:text-primary-accent hover:border-primary-accent"
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
