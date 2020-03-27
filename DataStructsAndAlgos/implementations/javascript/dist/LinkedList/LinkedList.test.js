"use strict";

var _LinkedList = require("./LinkedList");

var _ASSERT = require("../util/ASSERT");

(function main() {
  console.log("######################## LINKED LIST ########################");

  try {
    //Write Test Code Here
    var myList = new _LinkedList.LinkedList();

    for (var i = 0; i < 6; i++) {
      myList.insert(i, i);
    }

    (0, _ASSERT.ASSERT_ARRAY)(myList.displayLinkedList(), [0, 1, 2, 3, 4, 5]);
    console.log("# # # Test 1 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 1 FAILED");
  }

  try {
    //Write Test Code Here
    var _myList = new _LinkedList.LinkedList();

    for (var _i = 0; _i < 6; _i++) {
      _myList.insert(_i, 100);
    }

    _myList.removeElem(3);

    (0, _ASSERT.ASSERT_ARRAY)(_myList.displayLinkedList(), [0, 1, 2, 4, 5]);
    console.log("# # # Test 2 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 2 FAILED");
  }

  try {
    //Write Test Code Here
    var _myList2 = new _LinkedList.LinkedList();

    for (var _i2 = 0; _i2 < 6; _i2++) {
      _myList2.insert(_i2);
    }

    (0, _ASSERT.ASSERT_ARRAY)(_myList2.displayLinkedList(), [5, 4, 3, 2, 1, 0]);
    console.log("# # # Test 3 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 3 FAILED");
  }

  try {
    //Write Test Code Here
    var _myList3 = new _LinkedList.LinkedList();

    for (var _i3 = 0; _i3 < 6; _i3++) {
      _myList3.insert(_i3, Infinity);
    }

    _myList3.removeElem();

    (0, _ASSERT.ASSERT_ARRAY)(_myList3.displayLinkedList(), [1, 2, 3, 4, 5]);
    console.log("# # # Test 4 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 4 FAILED");
  }

  try {
    //Write Test Code Here
    var _myList4 = new _LinkedList.LinkedList();

    for (var _i4 = 0; _i4 < 6; _i4++) {
      _myList4.insert(_i4, Infinity);
    }

    _myList4.removeElem(Infinity);

    (0, _ASSERT.ASSERT_ARRAY)(_myList4.displayLinkedList(), [0, 1, 2, 3, 4]);
    console.log("# # # Test 5 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 5 FAILED");
  }

  try {
    //Write Test Code Here
    var _myList5 = new _LinkedList.LinkedList();

    for (var _i5 = 0; _i5 < 6; _i5++) {
      _myList5.insert(_i5, Infinity);
    }

    _myList5.removeElem(Infinity);

    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(0), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(1), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(2), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(3), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(4), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(5), true);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(6), false);
    (0, _ASSERT.ASSERT_ARRAY)(_myList5.search(-1), false);
    console.log("# # # Test 6 PASSED");
  } catch (error) {
    console.log(error);
    console.log("# # # Test 6 FAILED");
  }

  console.log("################# TERMINATING LINKED LIST ###################");
})();