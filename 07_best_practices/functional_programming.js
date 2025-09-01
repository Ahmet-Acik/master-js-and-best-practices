// functional_programming.js
// Functional programming concepts: immutability, pure functions, chaining

// Pure function
function add(a, b) {
  return a + b;
}

// Immutability
const arr = [1, 2, 3];
const newArr = arr.concat(4); // does not mutate arr

// Chaining
const result = arr.map(x => x * 2).filter(x => x > 2);
console.log(result);

// Best practice: Prefer pure functions and immutable data for predictable code.
