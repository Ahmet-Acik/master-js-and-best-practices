// strings.js
// Working with strings in JavaScript

const str = "Hello, World!";
console.log(str.length); // 13
console.log(str.slice(0, 5)); // Hello
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.includes("World")); // true
console.log(str.split(", ")); // [ 'Hello', 'World!' ]

// Template literals
const name = "Alice";
console.log(`Hello, ${name}!`);

// Best practice: Use template literals for readable string interpolation.
