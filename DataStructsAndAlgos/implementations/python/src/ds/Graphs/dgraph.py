from .. util.graph import GraphNode, Graph


class DGraph(Graph):
    def __init__(self, elem):
        self.root = GraphNode(elem)

    def shortestPath(self, elemToFind):
        pass
