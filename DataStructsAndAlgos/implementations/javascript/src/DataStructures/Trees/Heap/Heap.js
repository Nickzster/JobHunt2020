import { TreeNode } from "../TreeNode";

export class MinHeap {}

export class ArrayMinHeap {
  constructor() {
    this.heap = [];
  }
  left(parentElement) {
    return 2 * parentElement + 1;
  }
  right(parentElement) {
    return 2 * parentElement + 2;
  }
  getParent(childElement) {
    if (childElement % 2 === 0) return (childElement - 2) / 2; //child is right
    return (childElement - 1) / 2; //child is left
  }
  isNull(index) {
    return index >= this.length() || index < 0;
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  trickleUp(childIndex, parentIndex) {
    while (this.heap[parentIndex] > this.heap[childIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParent(parentIndex);
    }
  }
  heapify(root) {
    //Check children
    let rootRight = this.right(root);
    let rootLeft = this.left(root);
    while (
      (!this.isNull(rootRight) && this.heap[root] > this.heap[rootRight]) ||
      (!this.isNull(rootLeft) && this.heap[root] > this.heap[rootLeft])
    ) {
      let newChild;
      if (
        (!this.isNull(rootLeft) && this.isNull(rootRight)) ||
        this.heap[rootRight] > this.heap[rootLeft]
      )
        newChild = rootLeft;
      else newChild = rootRight;
      this.swap(root, newChild);
      root = newChild;
      rootRight = this.right(root);
      rootLeft = this.left(root);
    }
  }
  sort() {
    let sorted = [];
    //n
    while (this.length() > 0) {
      sorted.push(this.remove()); //logn
    }
    return sorted;
  }
  push(newElem) {
    this.heap.push(newElem);
    if (this.length() > 1) {
      let newElementIndex = this.length() - 1;
      this.trickleUp(newElementIndex, this.getParent(newElementIndex));
    }
  }
  remove() {
    let removed = this.heap[0];
    let endElement = this.heap.pop();
    if (this.length() > 0) {
      this.heap[0] = endElement;
      this.heapify(0);
    }
    return removed;
  }
  length() {
    return this.heap.length;
  }
  print() {
    return this.heap;
  }
}
