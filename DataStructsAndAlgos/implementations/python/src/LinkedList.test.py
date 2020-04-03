from ds.LinkedList.linkedlist import LinkedList
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testFour():
    try:
        myList = LinkedList(0)
        myList.insertAtRear(1)
        myList.insertAtRear(2)
        myList.insertAtRear(3)
        myList.reverse()
        COMPARE_LISTS(list([3, 2, 1, 0]), myList.printList())
    except Exception as err:
        print(err)
        print('Test 3 FAILED!')
    else:
        print('Test 3 Passed!')
    finally:
        print('-- Test 3 Complete. --')


def testThree():
    try:
        myList = LinkedList(0)
        myList.insertAtRear(1)
        myList.insertAtRear(2)
        myList.insertAtRear(3)
        COMPARE_LISTS(list([0, 1, 2, 3]), myList.printList())
        myList.removeRear()
        COMPARE_LISTS(list([0, 1, 2]), myList.printList())
    except Exception as err:
        print(err)
        print('Test 3 FAILED!')
    else:
        print('Test 3 Passed!')
    finally:
        print('-- Test 3 Complete. --')


def testTwo():
    try:
        myList = LinkedList(0)
        myList.insertAtRear(1)
        myList.insertAtRear(2)
        myList.insertAtRear(3)
        COMPARE_LISTS(list([0, 1, 2, 3]), myList.printList())
        myList.removeFront()
        COMPARE_LISTS(list([1, 2, 3]), myList.printList())
    except Exception as err:
        print(err)
        print('Test 2 FAILED!')
    else:
        print('Test 2 Passed!')
    finally:
        print('-- Test 2 Complete. --')


def testOne():
    try:
        myList = LinkedList(2)
        myList.insertAtFront(1)
        myList.insertAtRear(4)
        myList.insertAt(2, 3)
        COMPARE_LISTS(list([1, 2, 3, 4]), myList.printList())
        myList.insertAt(0, 0)
        COMPARE_LISTS(list([0, 1, 2, 3, 4]), myList.printList())
        myList.insertAt(5, 5)
        COMPARE_LISTS(list([0, 1, 2, 3, 4, 5]), myList.printList())
        COMPARE_VALUES(6, myList.getLength())
        COMPARE_VALUES(True, myList.search(1))
        COMPARE_VALUES(True, myList.search(5))
        COMPARE_VALUES(False, myList.search(6))

    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('-- Test 1 Complete. --')


if __name__ == "__main__":
    print('######################### LL #########################')
    testOne()
    testTwo()
    testThree()
    testFour()
    print('######################### LL #########################')
