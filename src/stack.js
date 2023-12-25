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
  push(element) {
    this.size++;
    element = this.storage[this.size];

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    let remove = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return remove;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    return this.stirage[this.size];
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
