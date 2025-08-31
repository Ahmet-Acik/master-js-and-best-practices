// higher_order_functions.js
// Functions that take other functions as arguments or return them

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const triple = makeMultiplier(3);
console.log(triple(4));
// Best practice: Use higher-order functions for reusable and modular code.
