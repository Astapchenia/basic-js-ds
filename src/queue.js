const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

constructor() {
    this.head = null; // Reference to the head of the linked list
    this.tail = null; // Reference to the tail of the linked list
  }

  /**
   * Returns the underlying linked list representation of the queue.
   *
   * @return {ListNode} - The head of the linked list
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Adds an element to the queue.
   *
   * @param {*} value - The value to be added to the queue
   */
  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Removes and returns the top element from the queue.
   *
   * @return {*} - The top element of the queue
   */
  dequeue() {
    if (this.head === null) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
