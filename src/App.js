import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const newTodo = () => {
    setTodos([...todos, document.getElementById("item").value]);
    document.getElementById("item").value = "";
  }

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todos.indexOf(todo) !== id));
  }

  return (
    <div className="App">
      <div className="todoCont" >
        <AddTodo addItem={newTodo} />
        <Todos todos={todos} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
