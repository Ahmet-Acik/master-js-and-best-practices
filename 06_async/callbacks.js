// callbacks.js
// Using callbacks for asynchronous operations

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData(function(result) {
  console.log(result);
});
// Best practice: Name your callbacks and handle errors if possible.
