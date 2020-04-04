from ..util.liststructure import ListStructure


class Stack(ListStructure):
    def __init__(self, startingElem=None):
        super().__init__(startingElem)

    def push(self, newElem):
        self.list.append(newElem)
        self.length += 1

    def pop(self):
        if self.length > 0:
            self.length -= 1
            return self.list.pop()
        else:
            return None

    def search(self, elemToFind):
        for elem in self.list:
            if elem == elemToFind:
                return True
        return False

    def peek(self):
        if self.length <= 0:
            return None
        return self.list[self.length-1]
