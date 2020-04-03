from ds.Trees.bst import BST
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        COMPARE_LISTS(list([10, 7, 15, 12]), tree.BFSTraversal())
        tree.insert(13)
        COMPARE_LISTS(list([10, 7, 15, 12, 13]), tree.BFSTraversal())
        tree.insert(14)
        COMPARE_LISTS(list([10, 7, 15, 12, 13, 14]), tree.BFSTraversal())
        tree.insert(11)
        COMPARE_LISTS(list([10, 7, 15, 12, 11, 13, 14]), tree.BFSTraversal())
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 12, 3, 5, 9, 11, 13, 2, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


def testTwo():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(2)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 12, 3, 5, 9, 11, 13, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 2 FAILED!')
    else:
        print('Test 2 Passed!')
    finally:
        print('Test 2 Complete.')


def testThree():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(14)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 12, 3, 5, 9, 11, 13, 2]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 3 FAILED!')
    else:
        print('Test 3 Passed!')
    finally:
        print('Test 3 Complete.')


def testFour():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(3)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 12, 2, 5, 9, 11, 13, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 4 FAILED!')
    else:
        print('Test 4 Passed!')
    finally:
        print('Test 4 Complete.')


def testFive():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(13)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 12, 3, 5, 9, 11, 14, 2]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 5 FAILED!')
    else:
        print('Test 5 Passed!')
    finally:
        print('Test 5 Complete.')


def testSix():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(10)
        COMPARE_LISTS(
            list([9, 7, 15, 4, 8, 12, 3, 5,  11, 13, 2, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 6 FAILED!')
    else:
        print('Test 6 Passed!')
    finally:
        print('Test 6 Complete.')


def testSeven():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(12)
        COMPARE_LISTS(
            list([10, 7, 15, 4, 8, 11, 3, 5, 9,  13, 2, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 7 FAILED!')
    else:
        print('Test 7 Passed!')
    finally:
        print('Test 7 Complete.')


def testEight():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(7)
        COMPARE_LISTS(
            list([10, 5, 15, 4, 8, 12, 3,  9, 11, 13, 2, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 8 FAILED!')
    else:
        print('Test 8 Passed!')
    finally:
        print('Test 8 Complete.')


def testNine():
    try:
        tree = BST(10)
        tree.insert(7)
        tree.insert(15)
        tree.insert(12)
        tree.insert(13)
        tree.insert(14)
        tree.insert(11)
        tree.insert(4)
        tree.insert(8)
        tree.insert(9)
        tree.insert(5)
        tree.insert(3)
        tree.insert(2)
        tree.removeElem(4)
        COMPARE_LISTS(
            list([10, 7, 15, 3, 8, 12, 2, 5, 9, 11, 13, 14]), tree.BFSTraversal())
    except Exception as err:
        print(err)
        print('Test 9 FAILED!')
    else:
        print('Test 9 Passed!')
    finally:
        print('Test 9 Complete.')


if __name__ == "__main__":
    print('######################### BST #########################')
    testOne()
    testTwo()
    testThree()
    testFour()
    testFive()
    testSix()
    testSeven()
    testEight()
    testNine()
    print('######################### BST #########################')
