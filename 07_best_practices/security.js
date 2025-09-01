// security.js
// Security best practices in JavaScript

// 1. Always validate and sanitize user input
// 2. Avoid eval() and new Function()
// 3. Escape output to prevent XSS
// 4. Use HTTPS and secure cookies
// 5. Keep dependencies up to date

// Example: Input validation
function isValidUsername(username) {
  return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}
console.log(isValidUsername('user_1'));

// Best practice: Follow OWASP guidelines for secure coding.
