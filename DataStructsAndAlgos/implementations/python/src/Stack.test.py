from ds.stack import Stack
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne():
    try:
        stack = Stack()
        stack.push(1)
        COMPARE_VALUES(1, stack.peek())
        COMPARE_VALUES(1, stack.getLength())
        stack.push(2)
        COMPARE_VALUES(2, stack.peek())
        COMPARE_VALUES(2, stack.getLength())
        stack.push(3)
        COMPARE_VALUES(3, stack.peek())
        COMPARE_VALUES(3, stack.getLength())
        COMPARE_VALUES(True, stack.search(1))
        COMPARE_VALUES(True, stack.search(2))
        COMPARE_VALUES(True, stack.search(3))
        COMPARE_VALUES(False, stack.search(4))
        COMPARE_VALUES(False, stack.search('Hi!'))
        COMPARE_VALUES(3, stack.pop())
        COMPARE_VALUES(2, stack.getLength())
        COMPARE_VALUES(2, stack.pop())
        COMPARE_VALUES(1, stack.getLength())
        COMPARE_VALUES(1, stack.pop())
        COMPARE_VALUES(0, stack.getLength())
        COMPARE_VALUES(None, stack.pop())
        COMPARE_VALUES(None, stack.pop())
        COMPARE_VALUES(None, stack.peek())
        COMPARE_VALUES(0, stack.getLength())
    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


if __name__ == "__main__":
    print('######################### STACK #########################')
    testOne()
    print('######################### STACK #########################')
