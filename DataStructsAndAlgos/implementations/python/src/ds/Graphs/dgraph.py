from .graph import GraphNode, Graph, Path
from ..Queue.queue import Queue
import copy


class DGraph(Graph):
    def __init__(self, schema=None):
        super().__init__(schema)

    def shortestPath(self, elemToFind):
        self.cleanUp()
        queue = Queue(Path(self.root))
        while(queue.getLength() > 0):
            currentPath = queue.pop()
            currentNode = currentPath.currentLocOnPath()
            if int(currentNode.elem) == elemToFind:
                return currentPath
            for edge in currentNode.children:
                child = edge.toNode
                if child.marked == False:
                    newPath = copy.deepcopy(currentPath)
                    newPath.insertNode(child)
                    queue.push(newPath)
        return None
