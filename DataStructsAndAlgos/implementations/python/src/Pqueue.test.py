from ds.PQueue.pqueue import PQueue

# import DS here
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne():
    try:
        pqueue = PQueue("Shower", 7)
        pqueue.insert("Work", 3)
        pqueue.insert("Get V-Water", 2)
        pqueue.insert("Sleep", 8)
        pqueue.insert("Work More", 5)
        pqueue.insert("Help With Dinner", 6)
        pqueue.insert("Brush Teeth", 1)
        pqueue.insert("Eat Lunch", 4)
        task = pqueue.completeTask()
        COMPARE_VALUES("Brush Teeth", task.task)
        COMPARE_VALUES(1, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Get V-Water", task.task)
        COMPARE_VALUES(2, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Work", task.task)
        COMPARE_VALUES(3, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Eat Lunch", task.task)
        COMPARE_VALUES(4, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Work More", task.task)
        COMPARE_VALUES(5, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Help With Dinner", task.task)
        COMPARE_VALUES(6, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Shower", task.task)
        COMPARE_VALUES(7, task.priority)
        task = pqueue.completeTask()
        COMPARE_VALUES("Sleep", task.task)
        COMPARE_VALUES(8, task.priority)

    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


if __name__ == "__main__":
    print('######################### PQueue #########################')
    testOne()
    print('######################### PQueue #########################')
