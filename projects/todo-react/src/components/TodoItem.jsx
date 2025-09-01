// TodoItem.jsx


function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
  editing,
  editValue,
  setEditValue,
  saveEdit,
  cancelEdit,
}) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        background: todo.done ? '#f6f6f6' : 'white',
        color: todo.done ? '#aaa' : '#222',
        fontStyle: todo.done ? 'italic' : 'normal',
        transition: 'background 0.2s',
        gap: 8,
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={onToggle}
        aria-label={todo.task}
        style={{ marginRight: 12 }}
      />
      {editing ? (
        <>
          <input
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            style={{ flex: 1, padding: 6, fontSize: 15, borderRadius: 4, border: '1px solid #bbb' }}
            onKeyDown={e => {
              if (e.key === 'Enter') saveEdit();
              if (e.key === 'Escape') cancelEdit();
            }}
            autoFocus
          />
          <button
            onClick={saveEdit}
            style={{ marginLeft: 4, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14 }}
          >Save</button>
          <button
            onClick={cancelEdit}
            style={{ marginLeft: 2, background: '#eee', color: '#333', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14 }}
          >Cancel</button>
        </>
      ) : (
        <>
          <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', fontSize: 16 }}>{todo.task}</span>
          <button
            onClick={onEdit}
            style={{ marginLeft: 4, background: '#fffbe6', color: '#bfa100', border: '1px solid #ffe58f', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14 }}
            aria-label="Edit todo"
          >Edit</button>
          <button
            onClick={onDelete}
            style={{ marginLeft: 2, background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: 14 }}
            aria-label="Delete todo"
          >Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
