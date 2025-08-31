// async_await.js
// Using async/await for cleaner async code

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

async function main() {
  const result = await fetchData();
  console.log(result);
}
main();
// Best practice: Use try/catch for error handling in async functions.
