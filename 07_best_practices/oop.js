// oop.js
// ES6 class syntax and OOP patterns

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();

// Best practice: Use classes for related data/behavior, and prefer composition over inheritance for flexibility.
