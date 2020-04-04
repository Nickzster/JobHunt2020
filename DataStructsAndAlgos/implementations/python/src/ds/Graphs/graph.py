
from .. LinkedList.linkedlist import LinkedList
from ..Queue.queue import Queue
from ..Stack.stack import Stack


class DirectedEdge:
    def __init__(self, toNode, weight=1):
        self.toNode = toNode
        self.weight = weight


class UndirectedEdge:
    def __init__(self, fromNode, toNode, weight=1):
        self.fromNode = fromNode
        self.toNode = toNode
        self.weight = weight


class Path:  # Represents a path, represented as a linked list, that has a weight to get from the beginning node to the end node
    def __init__(self, startingNode, weight=0):
        self.list = LinkedList(startingNode)
        self.weight = weight

    def updateWeight(self, newWeight):
        self.weight += newWeight

    def insertNode(self, newNode):
        self.list.insertAtRear(newNode)

    def currentLocOnPath(self):
        return self.list.peek()

    def getWeight(self):
        return self.weight


class GraphNode:
    def __init__(self, startingElem):
        self.elem = startingElem  # Element
        self.children = []  # An array of EDGES
        self.marked = False

    def push(self, newNode):
        self.children.append(newNode)

    def mark(self):
        self.marked = True

    def unmark(self):
        self.marked = False


class Graph:
    def __init__(self, schema=None):
        if schema == None:
            self.root = None
        else:
            self.build(schema)

    def build(self, schema):
        for vertex in schema:
            newNode = GraphNode(vertex)
            schema[vertex]['obj'] = newNode
            if 'root' in schema[vertex]:
                self.root = newNode
        for vertex in schema:
            props = schema[vertex]
            connections = props['connections']
            for edge in connections:
                props['obj'].push(DirectedEdge(
                    schema[edge['key']]['obj'], edge['weight']))
        print('Graph built successfully!')

    def search(self, searchType, elemToFind):
        traverseStruct = False
        if searchType == 'BFS':
            traverseStruct = Queue(self.root)
        elif searchType == 'DFS':
            traverseStruct = Stack(self.root)
        else:
            raise Exception('Invalid Search Method Provided!')
        while traverseStruct.getLength() > 0:
            newRoot = traverseStruct.pop()
            if newRoot.elem == elemToFind:
                return True
            for child in newRoot.children:
                traverseStruct.push(child)
        return False

    def updateNode(self, node, needToMatch):
        if node.marked != needToMatch and needToMatch == True:
            node.mark()
        else:
            node.unmark()

    def traverse(self, needToMatch):
        queue = Queue(self.root)
        self.updateNode(self.root, needToMatch)
        while queue.getLength() > 0:
            newRoot = queue.pop()
            for child in newRoot.children:
                if child.marked != needToMatch:
                    self.updateNode(child, needToMatch)
                    queue.push(child)

    def cleanUp(self):
        self.traverse(False)

    def displayGraphInBFSOrder(self):
        queue = Queue(self.root)
        finalStruct = []
        while queue.getLength() > 0:
            newRoot = queue.pop()
            print(newRoot.elem)
            finalStruct.append(newRoot.elem)
            for child in newRoot.children:
                if child.marked == False:
                    child.mark()
                    queue.push(child)
        self.cleanUp()
        return finalStruct
