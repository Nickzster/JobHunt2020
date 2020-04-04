from .graph import GraphNode, Graph


class DGraph(Graph):
    def __init__(self, schema=None):
        super().__init__(schema)

    def shortestPath(self, elemToFind):
        pass
