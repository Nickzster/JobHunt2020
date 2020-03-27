export class Stack {
  constructor() {
    this.stack = [];
  }
  // Stack.push(elem)
  // @desc: Pushes the specified elem onto the stack.
  // @runtime: O(1)
  // @space: O(1)
  push(elem) {
    this.stack.push(elem);
  }
  // Stack.pop()
  // @desc: Removes the top element off the stack
  // @runtime: O(1)
  // @space: O(1)
  pop() {
    let elem = this.peek();
    this.stack.pop();
    return elem;
  }
  // Stack.peek()
  // @desc: Peeks at the top element of the stack
  //@runtime: O(1)
  //@space: O(1)
  peek() {
    if (this.length() >= 1) return this.stack[this.length() - 1];
    else return -1;
  }
  //Stack.search(elem)
  //@desc: Searches for the specified elem in the stack.
  //@runtime: O(n)
  //@space: O(1)
  search(elem) {
    for (let i = 0; i < this.length(); i++) {
      if (this.stack[i] === elem) return i;
    }
    return -1;
  }
  //Stack.access(elem)
  //@desc: Access an element inside of the stack
  //@runtime: O(n)
  //@space O(1)
  access(elem) {
    return search(elem);
  }
  length() {
    return this.stack.length;
  }
  displayStack() {
    return this.stack;
  }
}
