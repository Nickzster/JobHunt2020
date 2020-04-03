from .. Stack.stack import Stack
from .. Queue.queue import Queue
from .. util.trees import TreeNode


class BST:
    def __init__(self, elem):
        self.root = TreeNode(elem)

    def init(self, newElem):
        if self.root == None:
            self.root = TreeNode(newElem)
            return True
        elif self.root.left == None and newElem < self.root.elem:
            self.root.left = TreeNode(newElem)
            return True
        elif self.root.right == None and newElem >= self.root.elem:
            self.root.right = TreeNode(newElem)
            return True
        return False

    # traverse returns a tuple
    # left element represents previous pointer to the one you want to find
    # right element represents pointer to the element you are looking for

    def traverse(self, func, elemToFind):
        currentPtr = self.root
        prevPtr = currentPtr
        while currentPtr != None:
            if func.upper() == 'SEARCH' and currentPtr.elem == elemToFind:
                break
            prevPtr = currentPtr
            if elemToFind >= currentPtr.elem:
                currentPtr = currentPtr.right
            else:
                currentPtr = currentPtr.left
        return (prevPtr, currentPtr)

    def destroy(self):
        if self.root.left == None and self.root.right == None:
            ptr = self.root
            self.root = None
            del ptr
            return True
        return False

    def insert(self, newElem):
        if not self.init(newElem):
            ptrs = self.traverse('', newElem)
            if newElem >= ptrs[0].elem:
                ptrs[0].right = TreeNode(newElem)
            else:
                ptrs[0].left = TreeNode(newElem)

    def removeElem(self, newElem):
        ptrs = self.traverse('SEARCH', newElem)
        if ptrs[1] == None:
            return None
        elif ptrs[1].left == None and ptrs[1].right == None:
            if ptrs[0].left == ptrs[1]:
                ptrs[0].left = None
            else:
                ptrs[0].right = None
        elif ptrs[1].left == None or ptrs[1].right == None:
            nextPtr = ptrs[1]
            if ptrs[1].right != None:
                nextPtr = nextPtr.right
                ptrs[1].right = None
            else:
                nextPtr = nextPtr.left
                ptrs[1].left = None
            ptrs[1].elem = nextPtr.elem
        else:
            ptrToReplace = ptrs[1]
            ptrToPrecedeDelete = ptrToReplace
            ptrToDelete = ptrToPrecedeDelete.left
            while ptrToDelete.right != None:
                ptrToPrecedeDelete = ptrToDelete
                ptrToDelete = ptrToDelete.right
            ptrToReplace.elem = ptrToDelete.elem
            if ptrToDelete.left != None:
                ptrToPrecedeDelete.left = ptrToDelete.left
                ptrToDelete.left = None
            elif ptrToPrecedeDelete.left == ptrToDelete:
                ptrToPrecedeDelete.left = None
            else:
                ptrToPrecedeDelete.right = None

    def binarySearch(self, elemToFind):
        ptrs = self.traverse(self, elemToFind)
        if ptrs[1] != None and ptrs[1].elem == elemToFind:
            return True
        return False

    def PreOrderRecursive(self, root=None, preOrder=[]):
        newRoot = root
        if root == None:
            newRoot = self.root
        preOrder.append(newRoot.elem)
        self.PreOrderRecursive(newRoot.left, preOrder)
        self.PreOrderRecursive(newRoot.right, preOrder)

    def InOrderRecursive(self, elem):
        pass

    def PostOrderRecursive(self, elem):
        pass

    def PreOrderIterative(self, elem):
        pass

    def InOrderIterative(self, elem):
        pass

    def DFS(self, elemToFind):
        pass

    def BFS(self, elemToFind):
        pass

    def BFSTraversal(self):
        BFSTraversal = []
        BFSQueue = Queue(self.root)
        while(BFSQueue.getLength() > 0):
            newRoot = BFSQueue.pop()
            BFSTraversal.append(newRoot.elem)
            if newRoot.left != None:
                BFSQueue.push(newRoot.left)
            if newRoot.right != None:
                BFSQueue.push(newRoot.right)
        return BFSTraversal
