import { FaTimes } from "react-icons/fa"

const Todo = ({ task, onDelete, todos }) => {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="inner">
        <h2>{task}</h2>
      </div>
      <FaTimes
        className="closeBtn"
        size={28}
        onClick={() => onDelete(todos.indexOf(task))}
      />
    </div>
  )
}

export default Todo;
