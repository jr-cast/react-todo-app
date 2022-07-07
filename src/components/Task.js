import { FaTimes } from "react-icons/fa"

const Task = ({ task, date }) => {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="inner">
        <h1>{task}</h1>
        <p className="date">{date}</p>
      </div>
      <FaTimes size={28} />
    </div>
  )
}

export default Task;
