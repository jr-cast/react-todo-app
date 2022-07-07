import { FaTimes } from "react-icons/fa"

const Todo = ({ task }) => {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="inner">
        <h2>{task}</h2>
      </div>
      <FaTimes size={28} />
    </div>
  )
}

export default Todo;
