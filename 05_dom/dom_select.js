// dom_select.js
// Selecting DOM elements

// In browser environment only
const element = document.getElementById('myId');
const items = document.querySelectorAll('.myClass');
console.log(element, items);
// Best practice: Use querySelector/querySelectorAll for flexibility, and cache selectors if reused.
