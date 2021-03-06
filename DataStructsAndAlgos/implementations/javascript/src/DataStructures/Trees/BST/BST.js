import { Stack } from '../../Stack/Stack';
import { Queue } from '../../Queue/Queue';
import { TreeNode } from '../TreeNode';

export class BST {
  constructor(elem) {
    this.root = null;
    if (!!elem) this.init(new TreeNode(elem));
  }

  init(newNode) {
    this.root = newNode;
  }
  cleanup() {
    this.root = null;
  }
  traverseToBottom(newElem, current, next) {
    while (!!next) {
      current = next;
      if (newElem >= next.elem) next = next.right;
      else next = next.left;
    }
  }
  traverseToFind(elemToFind, current, prev) {
    while (!!current && current.elem !== elemToFind) {
      prev = current;
      if (elemToFind >= current.elem) current = elemToRemove.right;
      else current = current.left;
    }
  }
  traverseToLargestSubTree(ptr, prevPtr) {
    while (!!ptr.right && !!ptr.right.right) {
      prevPtr = ptr;
      ptr = ptr.right;
    }
  }
  insert(newElem) {
    let newNode = new TreeNode(newElem);
    if (this.root === null) this.init(newNode);
    else if (!this.root.left && newElem < this.root.elem)
      this.root.left = newNode;
    else if (!this.root.right && newElem >= this.root.elem)
      this.root.right = newNode;
    else {
      let ptrs = { current: this.root, next: this.root };
      let current = this.root;
      let next = this.root;

      //TODO: Refactor into traverse method.
      while (!!next) {
        current = next;
        if (newElem >= next.elem) next = next.right;
        else next = next.left;
      }

      if (newElem >= current.elem && !current.right) current.right = newNode;
      else current.left = newNode;
    }
  }
  removeByElem(elem) {
    if (this.root.left === null && this.root.right === null) this.cleanup();
    else {
      let prev = this.root;
      let elemToRemove = this.root;
      //TODO: Refactor into traverse method
      while (!!elemToRemove && elemToRemove.elem !== elem) {
        prev = elemToRemove;
        if (elem >= elemToRemove.elem) elemToRemove = elemToRemove.right;
        else elemToRemove = elemToRemove.left;
      }
      if (!elemToRemove.left && !elemToRemove.right) {
        //case 0: elementToRemove has no children
        //figure out which side elemToRemove is from prev
        if (!!prev.right && prev.right.elem === elemToRemove.elem)
          prev.right = null;
        else prev.left = null;
      } else if (!elemToRemove.left || !elemToRemove.right) {
        prev.elem = elemToRemove.elem;
        //case 1: elemToRemove has ONLY a right child
        if (!elemToRemove.left && !!elemToRemove.right) prev.right = null;
        //case 2: elemToRemove has ONLY a left child
        else prev.left = null;
      } else {
        //case 3: elemToRemove has both a left child and a right child
        let newPtr = elemToRemove;
        elemToRemove = elemToRemove.left;
        prev = newPtr;
        //TODO: Refactor into traverse method
        while (!!elemToRemove.right) {
          prev = elemToRemove;
          elemToRemove = elemToRemove.right;
        }

        newPtr.elem = elemToRemove.elem;
        if (!!elemToRemove.left) {
          if (prev.left === elemToRemove) prev.left = elemToRemove.left;
          else prev.right = elemToRemove.left;
          elemToRemove.left = null;
        } else {
          if (prev.left === elemToRemove) prev.left = null;
          else prev.right = null;
        }
      }
    }
  }
  //Traversals
  PreOrderRecursive(returnArray, root = this.root) {
    if (!root) return;
    returnArray.push(root.elem);
    this.PreOrderRecursive(returnArray, root.left);
    this.PreOrderRecursive(returnArray, root.right);
  }
  InOrderRecursive(returnArray, root = this.root) {
    if (!root) return;
    this.InOrderRecursive(returnArray, root.left);
    returnArray.push(root.elem);
    this.InOrderRecursive(returnArray, root.right);
  }
  PostOrderRecursive(returnArray, root = this.root) {
    if (!root) return;
    this.PostOrderRecursive(returnArray, root.left);
    this.PostOrderRecursive(returnArray, root.right);
    returnArray.push(root.elem);
  }
  PreOrderIterative() {}
  InOrderIterative() {}
  //Searches
  BinarySearchIterative(elem) {
    let root = this.root;
    while (root !== null) {
      if (root.elem === elem) return true;
      else if (elem >= root.elem) root = root.right;
      else root = root.left;
    }
    return false;
  }
  BinarySearchRecursive() {}
  SearchIterative(search) {
    let output = [];
    let SearchStructure;
    switch (search.toUpperCase()) {
      case 'BFS':
        SearchStructure = new Queue();
        break;
      case 'DFS':
        SearchStructure = new Stack();
        break;
      default:
        return [];
    }
    SearchStructure.push(this.root);
    while (SearchStructure.length() > 0) {
      let root = SearchStructure.pop();
      output.push(root.elem);
      if (search.toUpperCase() === 'BFS') {
        if (!!root.left) SearchStructure.push(root.left);
        if (!!root.right) SearchStructure.push(root.right);
      } else if (search.toUpperCase() === 'DFS') {
        if (!!root.right) SearchStructure.push(root.right);
        if (!!root.left) SearchStructure.push(root.left);
      }
    }
    return output;
  }

  BFSIterative() {}
  BFSRecursive() {}

  DFSRecursive() {}
}
