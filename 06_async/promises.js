// promises.js
// Using Promises for async operations

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

fetchData().then(result => {
  console.log(result);
});
// Best practice: Always handle errors with .catch() or try/catch in async functions.
