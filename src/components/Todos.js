import Todo from "./Todo";

const Todos = ({ todos, onDelete, markDone, stroke }) => {
  return (
    <div>
      {todos.length > 0 ? todos.map((todo) =>
        (<Todo key={todo.id} task={todo.task} onDelete={onDelete} id={todo.id} markDone={markDone} stroke={stroke} />)) : "You are all set!"}
    </div>
  )
}

export default Todos;
