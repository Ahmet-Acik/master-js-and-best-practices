// custom_error.js
// Custom error classes for better error handling

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age cannot be negative');
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
// Best practice: Use custom error classes for specific error types.
