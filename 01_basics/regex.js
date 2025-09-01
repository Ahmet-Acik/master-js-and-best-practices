// regex.js
// Regular expressions in JavaScript

const email = "test@example.com";
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test(email)); // true

const str = "The rain in Spain";
console.log(str.match(/ain/g)); // [ 'ain', 'ain' ]

// Best practice: Use regex for validation and searching, but keep patterns readable and documented.
