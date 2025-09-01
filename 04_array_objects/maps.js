// maps.js
// Using Map for key-value pairs

const capitals = new Map();
capitals.set("France", "Paris");
capitals.set("Germany", "Berlin");
console.log(capitals.get("France")); // Paris

for (const [country, city] of capitals) {
  console.log(`${country}: ${city}`);
}

// Best practice: Use Map when you need keys that are not just strings.
