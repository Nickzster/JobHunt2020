export class Queue {
  constructor() {
    this.queue = [];
  }
  //Queue.peek()
  // @desc: Pushes the specified elem onto the stack.
  // @runtime: O(1)
  // @space: O(1)
  peek() {
    if (this.length() >= 1) return this.queue[0];
    else return -1;
  }
  // Queue.pop()
  pop() {
    let value = this.peek();
    this.queue.shift();
    return value;
  }
  //Queue.dequeue()
  dequeue() {
    this.pop();
  }
  //Queue.push(elem)
  push(elem) {
    this.queue.push(elem);
  }
  //Queue.enqueue(elem)
  enqueue(elem) {
    push(elem);
  }
  //Queue.search(elem)
  //@desc: Searches for the specified elem in the queue.
  //@runtime: O(n)
  //@space: O(1)
  search(elem) {
    for (let i = 0; i < this.length(); i++) {
      if (this.queue[i] === elem) return i;
    }
    return -1;
  }
  //Queue.access(elem)
  //@desc: Access an element inside of the queue
  //@runtime: O(n)
  //@space O(1)
  access(elem) {
    return search(elem);
  }
  length() {
    return this.queue.length;
  }
  displayQueue() {
    return this.queue;
  }
}
