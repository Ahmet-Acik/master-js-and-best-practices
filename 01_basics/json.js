// json.js
// Working with JSON in JavaScript

const obj = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":30}'

const parsed = JSON.parse(jsonString);
console.log(parsed.name); // Alice

// Best practice: Always validate and sanitize data before parsing JSON from external sources.
