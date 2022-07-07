import React from 'react';

const AddTodo = ({ addItem }) => {

  return (
    <div className="header">
      <h1>React Todo App</h1>
      <input id="item" type="text" />
      <button id="addBtn" onClick={addItem}>
        Add
      </button>
    </div>
  )
}

export default AddTodo;
