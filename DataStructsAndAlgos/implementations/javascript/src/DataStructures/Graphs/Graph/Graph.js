import { Queue } from '../../Queue/Queue';
import { Stack } from '../../Stack/Stack';

class Edge {
  constructor(child, weight = -1) {
    this.child = child;
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
      schema[elem]['ref'] = newNode;
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
        schema[elem]['ref'].children.push(
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
        let child = newRoot.children[i].child;
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
        let child = newRoot.children[i].child;
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
}
