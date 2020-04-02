from ds.heap import Heap
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testTwo():
    try:
        heap = Heap(4)
        heap.insert(3)
        heap.insert(1)
        heap.insert(2)
        heap.insert(5)
        heap.insert(10)
        heap.insert(9)
        heap.insert(6)
        heap.insert(8)
        heap.insert(7)
        COMPARE_LISTS(list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), heap.sort())
        COMPARE_VALUES(0, heap.getLength())
    except Exception as err:
        print(err)
        print('Test 2 FAILED!')
    else:
        print('Test 2 Passed!')
    finally:
        print('Test 2 Complete.')


def testOne():
    try:
        heap = Heap(4)
        heap.insert(3)
        heap.insert(1)
        heap.insert(2)
        heap.insert(5)
        COMPARE_LISTS(list([1, 2, 3, 4, 5]), heap.sort())
        COMPARE_VALUES(0, heap.getLength())
    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


if __name__ == "__main__":
    print('######################### <DS> #########################')
    testOne()
    testTwo()
    print('######################### <DS> #########################')
