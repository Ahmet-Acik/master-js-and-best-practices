// TodoItem.jsx

function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        background: todo.done ? '#f6f6f6' : 'white',
        color: todo.done ? '#aaa' : '#222',
        fontStyle: todo.done ? 'italic' : 'normal',
        transition: 'background 0.2s',
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={onToggle}
        aria-label={todo.task}
        style={{ marginRight: 12 }}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.task}</span>
    </li>
  );
}

export default TodoItem;
