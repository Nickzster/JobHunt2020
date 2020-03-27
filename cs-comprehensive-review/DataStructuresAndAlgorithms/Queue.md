# Queue

## Key Principles

- Can be thought of like a line at disneyland: You get in line, and have to wait until you get to the front of the line to get on the ride.
- FIFO - First In, First Out

## Key Operations

```javascript
class Queue {
  constructor() {
    this.queue = [];
  }
  //Queue.peek()
  // @desc: Pushes the specified elem onto the stack.
  // @runtime: O(1)
  // @space: O(1)
  peek() {}
  // Queue.pop()
  pop() {}
  //Queue.dequeue()
  dequeue() {}
  //Queue.push(elem)
  push(elem) {}
  //Queue.enqueue(elem)
  enqueue(elem) {}
  //Queue.search(elem)
  //@desc: Searches for the specified elem in the queue.
  //@runtime: O(n)
  //@space: O(1)
  search(elem) {
    for (let i = 0; i < queue.length; i++) {
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
}
```

## Implementation / Example

## Applications / What can they be used for?
