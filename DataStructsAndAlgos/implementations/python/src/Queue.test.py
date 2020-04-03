from ds.Queue.queue import Queue
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne():
    try:
        queue = Queue()
        queue.push(1)
        queue.push(2)
        queue.push(3)
        COMPARE_VALUES(True, queue.search(1))
        COMPARE_VALUES(True, queue.search(2))
        COMPARE_VALUES(True, queue.search(3))
        COMPARE_VALUES(False, queue.search(4))
        COMPARE_VALUES(False, queue.search('Hi!'))
        COMPARE_VALUES(3, queue.getLength())
        COMPARE_VALUES(1, queue.peek())
        COMPARE_VALUES(1, queue.pop())
        COMPARE_VALUES(2, queue.peek())
        COMPARE_VALUES(2, queue.getLength())
        COMPARE_VALUES(2, queue.pop())
        COMPARE_VALUES(3, queue.peek())
        COMPARE_VALUES(1, queue.getLength())
        COMPARE_VALUES(3, queue.pop())
        COMPARE_VALUES(None, queue.pop())
        COMPARE_VALUES(None, queue.pop())
        COMPARE_VALUES(None, queue.peek())
        COMPARE_VALUES(0, queue.getLength())

        pass
    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


if __name__ == "__main__":
    print('######################### Queue #########################')
    testOne()
    print('######################### Queue #########################')
