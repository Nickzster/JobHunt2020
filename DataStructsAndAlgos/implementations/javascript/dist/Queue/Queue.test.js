"use strict";

var _ASSERT = require("../util/ASSERT");

var _Queue = require("./Queue");

(function main() {
  console.log("##################### QUEUE ########################");

  try {
    //Write Test Code Here
    var myQueue = new _Queue.Queue();
    myQueue.push(3);
    myQueue.push(2);
    myQueue.push(1);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myQueue.peek(), 3);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myQueue.pop(), 3);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myQueue.pop(), 2);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myQueue.pop(), 1);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myQueue.length(), 0);
    console.log("# # # Test 1 PASSED");
  } catch (error) {
    (0, _ASSERT.logError)(error, "# # # Test 1 FAILED!");
  }

  try {
    //Write Test Code Here
    var _myQueue = new _Queue.Queue();

    _myQueue.push(1);

    _myQueue.push(2);

    _myQueue.push(3);

    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(_myQueue.peek(), 1);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(_myQueue.pop(), 1);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(_myQueue.pop(), 2);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(_myQueue.pop(), 3);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(_myQueue.length(), 0);
    console.log("# # # Test 1 PASSED");
  } catch (error) {
    (0, _ASSERT.logError)(error, "# # # Test 1 FAILED!");
  }

  console.log("##################### QUEUE ########################");
})();