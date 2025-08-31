// array_methods.js
// Common array methods: map, filter, reduce, forEach

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);
numbers.forEach(n => console.log(n));
console.log(evens, doubled, sum);
// Best practice: Prefer array methods over manual loops for clarity and brevity.
