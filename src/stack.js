const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  data = []

  push(element) {
    this.data.unshift(element);
  }

  pop() {
    if (this.data[0]) {
      return this.data.shift();
    }
    return undefined;
  }

  peek() {
    return this.data[0];
  }
}

module.exports = {
  Stack
};
