class Stack:
    def __init__(self):
        self.stack = []
        self.length = 0

    def push(self, newElem):
        self.stack.append(newElem)
        self.length += 1

    def pop(self):
        if self.length > 0:
            self.length -= 1
            return self.stack.pop()
        else:
            return None

    def search(self, elemToFind):
        for elem in self.stack:
            if elem == elemToFind:
                return True
        return False

    def peek(self):
        if self.length <= 0:
            return None
        return self.stack[self.length-1]

    def getLength(self):
        return self.length
