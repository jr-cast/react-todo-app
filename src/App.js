import React from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className="todoCont">
        <input type="text" />
        <button>Add task</button>
        <Task task="Do Laudry" date="Monday 7pm" />
        {/* <Task task="Do Laudry" date="Monday 7pm" />
        <Task task="Do Laudry" date="Monday 7pm" /> */}
      </div>
    </div>
  );
}

export default App;
