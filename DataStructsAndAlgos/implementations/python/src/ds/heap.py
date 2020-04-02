class Heap:
    def __init__(self, elem):
        self.heap = []
        self.heap.append(elem)

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
        temp = self.heap[a]
        self.heap[a] = self.heap[b]
        self.heap[b] = temp

    def isNull(self, index):
        return index < 0 or index > len(self.heap)-1

    def sort(self):
        sortedHeap = []
        while(self.getLength() > 0):
            sortedHeap.append(self.remove())
        return sortedHeap

    def insert(self, newElem):
        self.heap.append(newElem)
        self.trickleUp()

    def remove(self):
        removed = self.heap[0]
        self.heap[0] = self.heap[len(self.heap)-1]
        self.heap.pop(len(self.heap)-1)
        self.heapify(0)
        return removed

    def heapify(self, root):
        rightChild = self.getRightChildIndex(root)
        leftChild = self.getLeftChildIndex(root)
        while not self.isNull(rightChild) and self.heap[rightChild] < self.heap[root] or not self.isNull(leftChild) and self.heap[leftChild] < self.heap[root]:
            newChild = -1
            if self.isNull(rightChild) and not self.isNull(leftChild) or self.heap[rightChild] > self.heap[leftChild]:
                newChild = leftChild
            else:
                newChild = rightChild
            self.swap(root, newChild)
            root = newChild
            rightChild = self.getRightChildIndex(root)
            leftChild = self.getLeftChildIndex(root)

    def trickleUp(self):
        currIndex = len(self.heap)-1
        parentIndex = self.getParent(currIndex)
        while not self.isNull(parentIndex) and self.heap[currIndex] < self.heap[parentIndex]:
            self.swap(currIndex, parentIndex)
            currIndex = parentIndex
            parentIndex = self.getParent(parentIndex)

    def getLength(self):
        return len(self.heap)

    def printHeap(self):
        return self.heap
