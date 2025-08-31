// clean_code.js
// Clean code principles: DRY, KISS, YAGNI, SRP

// DRY: Don't Repeat Yourself
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser('Alice'));
console.log(greetUser('Bob'));

// KISS: Keep It Simple, Stupid
// Prefer simple, readable solutions over clever, complex ones.

// YAGNI: You Aren't Gonna Need It
// Only implement what's needed now, not hypothetical features.

// SRP: Single Responsibility Principle
// Each function/module should have one responsibility.

// Best practice: Write code that's easy to read, maintain, and extend.
