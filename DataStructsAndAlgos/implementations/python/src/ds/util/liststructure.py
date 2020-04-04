class ListStructure:
    def __init__(self, startingElem=None):
        self.list = []
        self.length = 0
        if startingElem != None:
            self.list.append(startingElem)

    def push(self):
        pass

    def pop(self):
        pass

    def peek(self):
        pass

    def getLength(self):
        return len(self.list)
