let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [...this.stomach, food];
  }
}

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
speedy.eat("lemon");
console.log( speedy.stomach ); // apple
// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple