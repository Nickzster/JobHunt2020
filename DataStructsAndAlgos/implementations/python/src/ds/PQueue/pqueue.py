from .. Trees.heap import Heap


class Task:
    def __init__(self, task, priority):
        self.task = task
        self.priority = priority


class PQueue:
    def __init__(self, task, priority):
        self.pqueue = []
        self.pqueue.append(Task(task, priority))

    def getRightChildIndex(self, parent):
        return 2 * parent + 2

    def getLeftChildIndex(self, parent):
        return 2 * parent + 1

    def getParent(self, child):
        if child % 2 == 0:
            return int((child-2) / 2)
        else:
            return int((child-1) / 2)

    def swap(self, a, b):
        temp = self.pqueue[a]
        self.pqueue[a] = self.pqueue[b]
        self.pqueue[b] = temp

    def isNull(self, index):
        return index < 0 or index > len(self.pqueue)-1

    def heapify(self, root):
        rightChild = self.getRightChildIndex(root)
        leftChild = self.getLeftChildIndex(root)
        while not self.isNull(rightChild) and self.pqueue[rightChild].priority < self.pqueue[root].priority or not self.isNull(leftChild) and self.pqueue[leftChild].priority < self.pqueue[root].priority:
            newChild = -1
            if self.isNull(rightChild) and not self.isNull(leftChild) or self.pqueue[rightChild].priority > self.pqueue[leftChild].priority:
                newChild = leftChild
            else:
                newChild = rightChild
            self.swap(root, newChild)
            root = newChild
            rightChild = self.getRightChildIndex(root)
            leftChild = self.getLeftChildIndex(root)

    def trickleUp(self):
        currIndex = len(self.pqueue)-1
        parentIndex = self.getParent(currIndex)
        while not self.isNull(parentIndex) and self.pqueue[currIndex].priority <= self.pqueue[parentIndex].priority:
            self.swap(currIndex, parentIndex)
            currIndex = parentIndex
            parentIndex = self.getParent(parentIndex)

    def getLength(self):
        return len(self.pqueue)

    def insert(self, task, priority):
        self.pqueue.append(Task(task, priority))
        self.trickleUp()

    def getHighestPriority(self):
        return self.pqueue[0]

    def completeTask(self):
        removed = self.pqueue[0]
        self.pqueue[0] = self.pqueue[len(self.pqueue)-1]
        self.pqueue.pop(len(self.pqueue)-1)
        self.heapify(0)
        self.trickleUp()
        return removed

    def printHeap(self):
        return self.pqueue
