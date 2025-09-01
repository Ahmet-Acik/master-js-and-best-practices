// type_checking.js
// Type checking with JSDoc and TypeScript basics

/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// TypeScript example (in .ts file):
// function add(a: number, b: number): number {
//   return a + b;
// }

// Best practice: Use JSDoc for type hints in JS, and TypeScript for large projects.
