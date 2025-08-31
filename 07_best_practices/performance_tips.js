// performance_tips.js
// Performance tips for JavaScript

// 1. Minimize DOM access
// 2. Use event delegation
// 3. Avoid memory leaks (remove event listeners, clear timers)
// 4. Use efficient loops (for...of, array methods)
// 5. Profile code with browser dev tools

// Example: Event delegation
// document.querySelector('ul').addEventListener('click', (e) => {
//   if (e.target.matches('li')) {
//     console.log('Item clicked:', e.target.textContent);
//   }
// });

// Best practice: Regularly profile and optimize code, especially in large or dynamic apps.
