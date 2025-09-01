// weakset_weakmap.js
// WeakSet and WeakMap for memory-sensitive collections

let obj1 = { name: "a" };
let obj2 = { name: "b" };

const ws = new WeakSet([obj1, obj2]);
console.log(ws.has(obj1)); // true

const wm = new WeakMap();
wm.set(obj1, 123);
console.log(wm.get(obj1)); // 123

// Best practice: Use WeakSet/WeakMap for objects that may be garbage collected.
