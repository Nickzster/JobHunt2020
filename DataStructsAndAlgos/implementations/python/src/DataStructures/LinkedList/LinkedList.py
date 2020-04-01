class Node: 
    def __init__(self, elem):
        self.elem = elem
        self.next = None

class LinkedList:
    def __init__(self, elem):
        self.head = Node(elem)
        self.tail = self.head
    def insertAtFront(self, elem):
        pass
    def insertAtRear(self, elem):
        pass
    def removeFromFront(self, elem):
        pass
    def removeFromRear(self, elem):
        pass
    def search(self, elemToFind):
        pass
    def reverse(self):
        pass
