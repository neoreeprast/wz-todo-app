import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoSubmit(event) {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  }

  function handleTodoDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleTodoEdit(index, newText) {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, text: newText } : todo));
  }

  function handleTodoToggleDone(index) {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} placeholder="Add a new todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? 'done' : ''}>
            <span>{todo.text}</span>
            <button onClick={() => handleTodoEdit(index, prompt('Enter new text:', todo.text))}>Edit</button>
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
            <button onClick={() => handleTodoToggleDone(index)}>{todo.done ? 'Undo' : 'Done'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
