
from .. util.linkedlist import SingleNode as Node


class LinkedList:
    def __init__(self, elem):
        self.head = Node(elem)
        self.tail = self.head
        self.length = 1

    def init(self, newElem):
        if self.length == 0:
            self.head = Node(newElem)
            self.tail = self.head
            self.length += 1
            return True
        return False

    def destroy(self):
        if self.length == 1:
            ptr = self.head
            self.tail = None
            self.head = None
            del ptr
            self.length = 0
            return True
        return False

    def insertAtFront(self, elemToAdd):
        if not self.init(elemToAdd):
            newNode = Node(elemToAdd)
            newNode.next = self.head
            self.head = newNode
            self.length += 1

    def insertAtRear(self, elemToAdd):
        if not self.init(elemToAdd):
            self.init(elemToAdd)
            newNode = Node(elemToAdd)
            self.tail.next = newNode
            self.tail = newNode
            self.length += 1

    def insertAt(self, location, elemToAdd):
        if not self.init(elemToAdd):
            if location > 0 and location <= self.length-1:
                newNode = Node(elemToAdd)
                prevNode = self.head
                counter = 1
                while counter < location:
                    prevNode = prevNode.next
                    counter += 1
                newNode.next = prevNode.next
                prevNode.next = newNode
                self.length += 1
            elif location == 0:
                self.insertAtFront(elemToAdd)
            elif location == self.length:
                self.insertAtRear(elemToAdd)

    def removeFront(self):
        if not self.destroy():
            ptr = self.head
            self.head = self.head.next
            ptr.next = None
            del ptr
            self.length -= 1

    def removeRear(self):
        if not self.destroy():
            ptr = self.head
            while ptr.next != self.tail:
                ptr = ptr.next
            self.tail = ptr
            ptr = self.tail.next
            self.tail.next = None
            del ptr
            self.length -= 1

    def removeAt(self, location):  # Save this for another day when you need a challenge
        pass

    def search(self, elemToFind):
        ptr = self.head
        while ptr != None:
            if ptr.elem == elemToFind:
                return True
            else:
                ptr = ptr.next
        return False

    def reverse(self):
        if self.length == 1:
            return
        elif self.length == 2:
            self.head.next = None
            self.tail.next = self.head
            temp = self.head
            self.head = self.tail
            self.tail = temp
        else:
            left = self.head
            middle = self.head.next
            right = middle.next
            self.head = None
            self.tail = left
            left.next = None
            while right != None:
                middle.next = left
                left = middle
                middle = right
                right = right.next
            middle.next = left
            self.head = middle

    def printList(self):
        if(self.length == 0):
            return None
        ptr = self.head
        currList = []
        while ptr != None:
            currList.append(ptr.elem)
            ptr = ptr.next
        return currList

    def getLength(self):
        return self.length

    def peek(self):
        if self.tail == None:
            return None
        return self.tail
