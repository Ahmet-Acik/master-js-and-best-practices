// dom_events.js
// Adding event listeners

// In browser environment only
document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});
// Best practice: Use addEventListener, and separate logic from DOM manipulation.
