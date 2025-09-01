// todo.js
// Simple, original CLI-based to-do app (no frameworks, no DOM)

const todos = [];

function addTodo(task) {
  todos.push({ task, done: false });
}

function listTodos() {
  if (todos.length === 0) {
    console.log('No todos yet!');
    return;
  }
  todos.forEach((todo, i) => {
    console.log(`${i + 1}. [${todo.done ? 'x' : ' '}] ${todo.task}`);
  });
}

function completeTodo(index) {
  if (todos[index]) {
    todos[index].done = true;
  }
}

// Example usage:
addTodo('Learn JavaScript');
addTodo('Build a to-do app');
listTodos();
completeTodo(0);
listTodos();

// Best practice: Keep data and logic separate from UI. This is a pure logic version for CLI/testing.
