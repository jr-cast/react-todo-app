import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      task: 'Go to gym',
      checked: false,
    },
    {
      id: nanoid(),
      task: 'Do laundry',
      checked: false,
    },
    {
      id: nanoid(),
      task: 'Walk dog',
      checked: false,
    },
  ]);

  const newTodo = () => {
    setTodos([...todos, {
      id: nanoid(),
      task: document.getElementById("item").value,
      checked: false,
    }]);
    document.getElementById("item").value = "";
  }

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Mark done tasks
  const markDone = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    );
  }

  // Stroke task
  const stroke = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle('crossed-line');
  }

  return (
    <div className="App">
      <div className="todoCont" >
        <AddTodo addItem={newTodo} />
        <Todos todos={todos} onDelete={deleteTask} markDone={markDone} stroke={stroke} />
      </div>
    </div>
  );
}

export default App;
