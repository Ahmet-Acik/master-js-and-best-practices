// loops.js
// For, while, and for...of loops

for (let i = 0; i < 3; i++) {
  console.log("For loop iteration:", i);
}

let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log("For...of loop item:", item);
}
// Best practice: Use for...of for arrays, forEach for functional style, and avoid infinite loops.
