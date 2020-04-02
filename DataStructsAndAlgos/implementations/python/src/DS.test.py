# import DS here
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne():
    try:
        pass
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
    print('######################### <DS> #########################')
