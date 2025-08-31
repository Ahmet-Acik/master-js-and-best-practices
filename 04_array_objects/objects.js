// objects.js
// Creating and using objects

const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet();
// Best practice: Use object literals for simple structures, and methods for behavior.
