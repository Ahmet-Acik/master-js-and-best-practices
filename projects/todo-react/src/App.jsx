

import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const LOCAL_KEY = 'todo-app-v1';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [
      { task: 'Learn React', done: false },
      { task: 'Build a to-do app', done: false },
    ];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

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

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function startEdit(index) {
    setEditing(index);
    setEditValue(todos[index].task);
  }

  function saveEdit(index) {
    if (!editValue.trim()) return;
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, task: editValue } : todo
      )
    );
    setEditing(null);
    setEditValue('');
  }

  function cancelEdit() {
    setEditing(null);
    setEditValue('');
  }

  function filteredTodos() {
    if (filter === 'active') return todos.filter(t => !t.done);
    if (filter === 'completed') return todos.filter(t => t.done);
    return todos;
  }

  return (
    <div
      className="App"
      style={{
        maxWidth: 420,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
        padding: 32,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 28, letterSpacing: 1 }}>
        React To-Do App
      </h1>
      <form
        onSubmit={addTodo}
        style={{ display: 'flex', gap: 10, marginBottom: 22 }}
        aria-label="Add new todo"
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
          style={{
            flex: 1,
            padding: 10,
            border: '1px solid #bbb',
            borderRadius: 5,
            fontSize: 16,
          }}
          aria-label="New todo"
        />
        <button
          type="submit"
          style={{
            padding: '10px 18px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 16,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          Add
        </button>
      </form>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18, justifyContent: 'center' }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            background: filter === 'all' ? '#1976d2' : '#eee',
            color: filter === 'all' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '6px 14px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >All</button>
        <button
          onClick={() => setFilter('active')}
          style={{
            background: filter === 'active' ? '#1976d2' : '#eee',
            color: filter === 'active' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '6px 14px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >Active</button>
        <button
          onClick={() => setFilter('completed')}
          style={{
            background: filter === 'completed' ? '#1976d2' : '#eee',
            color: filter === 'completed' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '6px 14px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >Completed</button>
      </div>
      <TodoList
        todos={filteredTodos()}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={startEdit}
        editing={editing}
        editValue={editValue}
        setEditValue={setEditValue}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;
