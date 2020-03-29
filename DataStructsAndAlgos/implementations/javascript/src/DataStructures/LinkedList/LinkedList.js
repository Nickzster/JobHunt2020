class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

export class LinkedList {
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
  insert(newElem, location = 0) {
    let newNode = new Node(newElem);
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
      } else if (location >= this.count) {
        //remove from rear
        for (let i = 0; i < this.count - 2; i++) ptr = ptr.next;
        this.tail = ptr;
        this.tail.next = null;
      } else {
        //remove at i
        for (let i = 0; i < location - 1; i++) ptr = ptr.next;
        let nodeToRemove = ptr.next;
        ptr.next = nodeToRemove.next;
        nodeToRemove.next = null;
      }
    }
    this.count--;
  }
  search(value) {
    let ptr = this.head;
    while (!!ptr && ptr.value !== value) ptr = ptr.next;
    if (!!ptr) return false;
    return true;
  }
  peekFront() {
    return this.head.elem;
  }
  peekRear() {
    return this.tail.elem;
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
