def COMPARE_LISTS(expected, actual):
    if len(expected) != len(actual):
        sentence = '# # # ERROR: lengths do not match! expected a had length {} while actual had length {}'
        raise Exception(sentence.format(expected, actual))
    counter = 0
    while counter < len(expected):
        if expected[counter] != actual[counter]:
            sentence = '# # # ERROR: expected {0} at {2}, but got {1} at {2}!'
            raise Exception(sentence.format(expected, actual, counter))
        counter += 1
    return True


def COMPARE_VALUES(expected, actual):
    if expected == actual:
        return True
    else:
        sentence = '# # # ERROR: expected value {} does not match actual value {}'
        raise Exception(sentence.format(expected, actual))
