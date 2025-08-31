// object_methods.js
// Object methods and 'this' keyword

const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this.value;
  },
  reset() {
    this.value = 0;
    return this.value;
  }
};
console.log(calculator.add(5));
console.log(calculator.reset());
// Best practice: Use 'this' for object context, and arrow functions for callbacks only.
