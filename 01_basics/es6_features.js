// es6_features.js
// Modern ES6+ features

// Destructuring
const [a, b] = [1, 2];
const { x, y } = { x: 10, y: 20 };

// Spread/Rest
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }

// Template literals
const name = 'World';
console.log(`Hello, ${name}!`);

// Default parameters
function greet(msg = 'Hi') { console.log(msg); }

// Arrow functions, let/const, etc. are used throughout the project.
// Best practice: Prefer modern syntax for clarity and brevity.
