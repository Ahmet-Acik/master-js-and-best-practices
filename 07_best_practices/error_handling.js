// error_handling.js
// Handle errors gracefully

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}
// Best practice: Use try/catch for error handling and provide helpful error messages.
