// dom_manipulation.js
// Manipulating DOM elements

// In browser environment only
const el = document.getElementById('title');
el.textContent = 'New Title';
el.classList.add('highlight');
// Best practice: Manipulate the DOM efficiently, and avoid layout thrashing.
