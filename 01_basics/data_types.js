// data_types.js
// JavaScript data types: string, number, boolean, null, undefined, object, symbol

const str = "Hello";
const num = 42;
const bool = true;
const nothing = null;
let notDefined;
const obj = { key: "value" };
const sym = Symbol("id");

console.log(typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof obj, typeof sym);
// Best practice: Use 'typeof' to check types, and be aware of quirks (typeof null === 'object')
