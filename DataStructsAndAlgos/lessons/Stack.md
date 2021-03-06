# Stack

## Key Principles

- Can be thought of like dinner plates: When you unload your dishwasher, you stack the plates in your pantry (push). When you go to use a plate, you grab one off the top (pop).
- LIFO - Last In, First Out.

## Implementation / Example

```javascript
class Stack {
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
    let elem = this.stack.peek();
    this.stack.pop();
    return elem;
  }
  // Stack.peek()
  // @desc: Peeks at the top element of the stack
  //@runtime: O(1)
  //@space: O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }
  //Stack.search(elem)
  //@desc: Searches for the specified elem in the stack.
  //@runtime: O(n)
  //@space: O(1)
  search(elem) {
    for (let i = 0; i < stack.length; i++) {
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
}
```

## Applications / What can they be used for?

- Can be used to implement DFS iteratively!
