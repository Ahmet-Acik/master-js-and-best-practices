// TodoList.jsx
import TodoItem from './TodoItem';


function TodoList({ todos, onToggle }) {
  if (todos.length === 0)
    return <p style={{ color: '#888', fontStyle: 'italic' }}>No todos yet!</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onToggle={() => onToggle(i)} />
      ))}
    </ul>
  );
}

export default TodoList;
