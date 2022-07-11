import { FaTimes } from "react-icons/fa"

const Todo = ({ task, onDelete, id, markDone, stroke }) => {
  return (
    <div id={id} className="task">
      <input
        type="checkbox"
        onMouseDown={() => markDone(id)}
        onMouseUp={() => stroke(id)}
      />
      <div className="inner">
        <h2>{task}</h2>
      </div>
      <FaTimes
        className="closeBtn"
        size={28}
        onClick={() => onDelete(id)}
      />
    </div>
  )
}

export default Todo;
