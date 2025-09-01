// date_time.js
// Working with dates and times in JavaScript

const now = new Date();
console.log(now.toISOString()); // Current date/time in ISO format

const specific = new Date('2025-09-01T12:00:00Z');
console.log(specific.getFullYear(), specific.getMonth() + 1, specific.getDate());

// Formatting
dateStr = now.toLocaleDateString('en-US');
console.log(dateStr);

// Best practice: Use libraries like date-fns or dayjs for complex date operations.
