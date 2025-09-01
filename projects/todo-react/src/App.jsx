
import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { task: 'Learn React', done: false },
    { task: 'Build a to-do app', done: false },
  ]);
  const [input, setInput] = useState('');

  function addTodo(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { task: input, done: false }]);
    setInput('');
  }

  function toggleTodo(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div
      className="App"
      style={{
        maxWidth: 400,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: 24,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24 }}>
        React To-Do App
      </h1>
      <form
        onSubmit={addTodo}
        style={{ display: 'flex', gap: 8, marginBottom: 20 }}
        aria-label="Add new todo"
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
          style={{
            flex: 1,
            padding: 8,
            border: '1px solid #ccc',
            borderRadius: 4,
            fontSize: 16,
          }}
          aria-label="New todo"
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 16,
          }}
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
