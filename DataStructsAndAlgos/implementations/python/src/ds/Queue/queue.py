from ..util.liststructure import ListStructure


class Queue(ListStructure):
    def __init__(self, startingElem=None):
        super().__init__(startingElem)

    def push(self, newElem):
        self.list.append(newElem)
        self.length += 1

    def pop(self):
        if self.length > 0:
            self.length -= 1
            return self.list.pop(0)
        else:
            return None

    def enqueue(self, newElem):
        self.push(newElem)

    def dequeue(self):
        return self.pop()

    def peek(self):
        if self.length <= 0:
            return None
        return self.list[0]

    def search(self, elemToFind):
        for elem in self.list:
            if elemToFind == elem:
                return True
        return False
