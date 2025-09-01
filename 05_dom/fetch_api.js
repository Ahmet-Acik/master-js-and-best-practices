// fetch_api.js
// Fetch API for HTTP requests

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

// Best practice: Always handle errors and check response status.
