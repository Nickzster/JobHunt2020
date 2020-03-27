# Linked List

## Key Principles

- Add & Removal from the beginning is O(1)
- Removing elements from Linked List: Might have to delete elements depending on language
- Runner technique: Iterate through the linked list with two pointers, one ahead of the other.

## Implementation / Example

```javascript
class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  isEmpty() {
    if (this.count === 0) return true;
    return false;
  }
  init(newNode) {
    this.head = newNode;
    this.tail = newNode;
  }
  cleanUp() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }
  insert(location = 0, newNode) {
    if (this.isEmpty()) this.init(newNode);
    else {
      if (location >= this.count) {
        //insert at rear
        this.tail.next = newNode;
        this.tail = this.tail.next;
      } else if (location <= 0) {
        //insert at front
        newNode.next = this.head;
        this.head = newNode;
      } else {
        //insert at i
        let ptr = this.head;
        for (let i = 0; i < location; i++) ptr = ptr.next;
        newNode.next = ptr.next;
        ptr.next = newNode;
      }
    }
    this.count++;
  }
  removeElem(location = 0) {
    let ptr = this.head;
    if (this.count === 1) this.cleanUp();
    else {
      if (location <= 0) {
        //remove from front
        this.head = this.head.next;
        ptr.next = null;
      } else {
        //remove at i
        if (location >= this.count) location = this.count - 1; //remove from rear
        for (let i = 0; i < location; i++) ptr = ptr.next;
        this.tail = ptr;
      }
    }
    this.count--;
  }
  search(value) {
    let ptr = this.head;
    while (ptr.value !== value) ptr = ptr.next;
  }
  displayLinkedList() {
    let displayArray = [];
    let ptr = this.head;
    while (ptr !== null) {
      displayArray.push(ptr.elem);
      ptr = ptr.next;
    }
    return displayArray;
  }
}
```

## Applications / What can they be used for?
