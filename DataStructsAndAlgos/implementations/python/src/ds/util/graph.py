
from .. LinkedList.linkedlist import LinkedList
from ..Queue.queue import Queue
from ..Stack.stack import Stack


class Edge:
    def __init__(self, child, weight=1):
        self.child = child
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
    def __init__(self, elem):
        self.root = elem
        self.children = []


class Graph:
    def __init__(self, elem=None):
        if elem == None:
            self.root = None
        else:
            self.root = GraphNode(elem)

    def build(self, schema):
        pass

    def BFS(self, elemToFind):
        pass

    def BFSTraverse(self):
        pass

    def DFS(self, elemToFind):
        pass

    def traverse(self):
        pass
