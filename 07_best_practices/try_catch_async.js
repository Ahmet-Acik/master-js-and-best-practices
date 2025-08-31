// try_catch_async.js
// Error handling with async/await

async function fetchData() {
  throw new Error('Network error');
}

async function main() {
  try {
    await fetchData();
  } catch (error) {
    console.error('Caught error:', error.message);
  }
}

main();
// Best practice: Always use try/catch with async/await for robust error handling.
