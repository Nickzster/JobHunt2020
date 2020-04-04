import { Queue } from "../../Queue/Queue";
import { Stack } from "../../Stack/Stack";
import { LinkedList } from "../../LinkedList/LinkedList";

class Path {
  constructor(node, weight = 0) {
    this.list = new LinkedList();
    this.insertNode(node, Infinity);
    this.weight = weight;
  }
  increment() {
    this.weight += 1;
  }
  incrementBy(val) {
    this.weight += val;
  }
  insertNode(node) {
    this.list.insert(node, Infinity);
  }
  viewCurrent() {
    return this.list.peekRear();
  }
  getWeight() {
    return this.weight;
  }
}

class Edge {
  constructor(node, weight = -1) {
    this.toNode = node;
    this.weight = weight;
  }
}

class GraphNode {
  constructor(elem) {
    this.elem = elem;
    this.marked = false;
    this.children = [];
  }
  mark() {
    this.marked = true;
  }
  unmark() {
    this.marked = false;
  }
}

export class Graph {
  constructor(elem) {
    this.root = null;
    if (!!elem) this.init(new GraphNode(elem));
  }
  init(elem) {
    this.root = new GraphNode(elem);
  }
  build(schema) {
    //append a reference, of the new node, to the schema
    for (let elem in schema) {
      let newNode = new GraphNode(elem);
      if (!!schema[elem].root) this.root = newNode;
      schema[elem]["ref"] = newNode;
    }
    //append the children nodes, of each element in the schema, to the reference node.
    for (let elem in schema) {
      for (
        let childIndex = 0;
        childIndex < schema[elem].connections.length;
        childIndex++
      ) {
        let edgeInformation = schema[elem].connections[childIndex];
        let existingNode = schema[edgeInformation.key].ref;
        schema[elem]["ref"].children.push(
          new Edge(existingNode, edgeInformation.weight)
        );
      }
    }
  }
  updateNode(node, needToMatch) {
    if (needToMatch) return node.mark();
    else return node.unmark();
  }
  traverse(needToMatch, searchFor = -1) {
    let output = [];
    let queue = new Queue();
    queue.push(this.root);
    this.updateNode(this.root, needToMatch);
    let found = false;
    while (queue.length() > 0) {
      let newRoot = queue.pop();
      output.push(parseInt(newRoot.elem, 10));
      for (let i = 0; i < newRoot.children.length; i++) {
        let child = newRoot.children[i].toNode;
        if (parseInt(child.elem, 10) === searchFor) found = true;
        if (child.marked !== needToMatch) {
          this.updateNode(child, needToMatch);
          queue.push(child);
        }
      }
    }
    return { output, found };
  }
  unmarkAll() {
    this.traverse(false);
  }
  DFS(elem) {
    let stack = new Stack();
    stack.push(this.root);
    this.updateNode(this.root, true);
    let found = false;
    while (stack.length() > 0) {
      let newRoot = stack.pop();
      for (let i = 0; i < newRoot.children.length; i++) {
        let child = newRoot.children[i].toNode;
        if (parseInt(child.elem, 10) === elem) found = true;
        if (child.marked === false) {
          this.updateNode(child, true);
          stack.push(child);
        }
      }
    }
    this.unmarkAll();
    return found;
  }
  BFS(elem) {
    let found = this.traverse(true, elem);
    this.unmarkAll();
    return found.found;
  }
  print() {
    let graphArr = this.traverse(true);
    this.unmarkAll();
    return graphArr.output;
  }
  shortestPathTo(elem) {
    let queue = new Queue();
    queue.push(new Path(this.root, 0));
    this.updateNode(this.root, true);
    while (queue.length() > 0) {
      let currentPath = queue.pop();
      let lastNodeInCurrentPath = currentPath.viewCurrent();
      if (parseInt(lastNodeInCurrentPath.elem, 10) === parseInt(elem, 10))
        return currentPath.getWeight() + 1;
      for (let i = 0; i < lastNodeInCurrentPath.children.length; i++) {
        let child = lastNodeInCurrentPath.children[i].toNode;
        if (child.marked === false) {
          this.updateNode(child, true);
          let updatedPath = Object.create(currentPath);
          updatedPath.insertNode(child);
          updatedPath.increment();
          queue.push(updatedPath);
        }
      }
    }
    return -1;
  }
}
