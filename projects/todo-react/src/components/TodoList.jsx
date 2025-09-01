// TodoList.jsx
import TodoItem from './TodoItem';



function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  editing,
  editValue,
  setEditValue,
  saveEdit,
  cancelEdit,
}) {
  if (todos.length === 0)
    return <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No todos yet!</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          onToggle={() => onToggle(i)}
          onDelete={() => onDelete(i)}
          onEdit={() => onEdit(i)}
          editing={editing === i}
          editValue={editValue}
          setEditValue={setEditValue}
          saveEdit={() => saveEdit(i)}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
