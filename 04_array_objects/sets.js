// sets.js
// Using Set for unique values

const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4 }

uniqueNumbers.add(5);
uniqueNumbers.delete(2);
console.log(uniqueNumbers.has(3)); // true

// Best practice: Use Set for collections of unique items.
