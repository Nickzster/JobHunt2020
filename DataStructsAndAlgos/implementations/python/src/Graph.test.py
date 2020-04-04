from ds.Graphs.dgraph import DGraph as Graph
import json
from Testing.test import COMPARE_VALUES, COMPARE_LISTS


def testOne(schema):
    try:
        graph = Graph(schema)
        shortestPath = graph.shortestPath(3)
        if shortestPath == None:
            raise Exception('Shortest Path is None, but I expected a result!')
        COMPARE_LISTS([1, 2, 4, 3], graph.displayGraphInBFSOrder())
        COMPARE_LISTS([1, 2, 3], shortestPath.printPath())
        COMPARE_VALUES(2, shortestPath.getWeight())
    except Exception as err:
        print(err)
        print('Test 1 FAILED!')
    else:
        print('Test 1 Passed!')
    finally:
        print('Test 1 Complete.')


def testTwo(schema):
    try:
        graph = Graph(schema)
        shortestPath = graph.shortestPath(7)
        if shortestPath == None:
            raise Exception('Shortest path is None, but I expected a result!')
        COMPARE_LISTS([1, 2, 3, 5, 6, 7, 4], graph.displayGraphInBFSOrder())
        COMPARE_LISTS([1, 2, 5, 7], shortestPath.printPath())
        COMPARE_VALUES(3, shortestPath.getWeight())
    except Exception as err:
        print(err)
        print('Test 2 FAILED!')
    else:
        print('Test 2 Passed!')
    finally:
        print('Test 2 Complete.')


if __name__ == "__main__":
    print('######################### Graph #########################')
    graphs = json.loads("""{
    "graphOne": {
        "1": {
            "root": true,
            "connections": [
                {"key": "2", "weight": "1"},
                {"key": "4", "weight": "1"}
            ]
        },
        "2": {
            "connections": [
                {"key": "3", "weight": "1"},
                {"key": "1", "weight": "1"}
            ]
        },
        "3": {
            "connections": []
        },
        "4": {
            "connections": [{"key": "3", "weight": "1"}]
        }
    },
    "graphTwo": {
        "1": {
            "root": true,
            "connections": [
                {"key": "2", "weight": "1"},
                {"key": "3", "weight": "1"}
            ]
        },
        "2": {
            "connections": [{"key": "5", "weight": "1"}]
        },
        "3": {
            "connections": [
                {"key": "2", "weight": "1"},
                {"key": "6", "weight": "1"}
            ]
        },
        "4": {
            "connections": [{"key": "7", "weight": "1"}]
        },
        "5": {
            "connections": [{"key": "7", "weight": "1"}]
        },
        "6": {
            "connections": [{"key": "4", "weight": "1"}]
        },
        "7": {
            "connections": []
        }
    }
}""")
    testOne(graphs['graphOne'])
    testTwo(graphs['graphTwo'])
    print('######################### Graph #########################')
