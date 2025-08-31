// debounce.js
// Debounce function: delays execution until after wait ms have elapsed since last call

function debounce(fn, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Example usage:
window.addEventListener('resize', debounce(() => console.log('Resized!'), 300));

// Best practice: Use debounce for performance optimization in events like resize, scroll, input.
