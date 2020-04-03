class Queue:
    def __init__(self, newElem=None):
        self.queue = []
        self.length = 0
        if newElem != None:
            self.push(newElem)

    def push(self, newElem):
        self.queue.append(newElem)
        self.length += 1

    def pop(self):
        if self.length > 0:
            self.length -= 1
            return self.queue.pop(0)
        else:
            return None

    def enqueue(self, newElem):
        self.push(newElem)

    def dequeue(self):
        return self.pop()

    def peek(self):
        if self.length <= 0:
            return None
        return self.queue[0]

    def search(self, elemToFind):
        for elem in self.queue:
            if elemToFind == elem:
                return True
        return False

    def getLength(self):
        return self.length
