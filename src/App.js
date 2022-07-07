import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);
  const newTodo = () => {
    setTodos([...todos, document.getElementById("item").value]);
  }

  const todosProps = [];
  todos.forEach((item) => todosProps.push(
    <Todo
      task={item}
    />
  ));

  return (
    <div className="App">
      <div className="todoCont" >
        <AddTodo addItem={newTodo} />
        {todos.length > 0 ? todosProps : "You are all set!"}
      </div>
    </div>
  );
}

export default App;
