import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.length > 0 ? todos.map((todo) => (<Todo key={todos.indexOf(todo)} task={todo} onDelete={onDelete} todos={todos} />)) : "You are all set!"}
    </div>
  )
}

export default Todos;
