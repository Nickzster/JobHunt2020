"use strict";

var _Stack = require("./Stack");

var _ASSERT = require("../util/ASSERT");

(function main() {
  console.log("##################### STACK ########################");

  try {
    //Write Test Code Here
    var myStack = new _Stack.Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(3, myStack.pop());
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(2, myStack.peek());
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(2, myStack.pop());
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(1, myStack.pop());
    (0, _ASSERT.ASSERT_DIRECT_COMPARE)(myStack.length(), 0);
    console.log("# # # Test 1 PASSED");
  } catch (error) {
    (0, _ASSERT.logError)(error, "# # # Test 1 FAILED!");
  }

  console.log("##################### STACK ########################");
})();