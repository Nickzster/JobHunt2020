class GraphNode:
    def __init__(self, elem):
        self.root = elem
        self.children = []


class Graph:
    def __init__(self, elem):
        self.root = GraphNode(elem)

    def initalize(self, schema):
        pass

    def BFS(self, elemToFind):
        pass

    def DFS(self, elemToFind):
        pass

    def traverse(self):
        pass

    def ShortestPath(self, elemToFind):
        pass
