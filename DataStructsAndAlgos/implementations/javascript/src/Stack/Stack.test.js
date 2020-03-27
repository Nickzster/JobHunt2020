import { Stack } from "./Stack";
import { ASSERT_DIRECT_COMPARE as ASSERT, logError } from "../util/ASSERT";

(function main() {
  console.log("##################### STACK ########################");
  try {
    //Write Test Code Here
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    ASSERT(3, myStack.pop());
    ASSERT(2, myStack.peek());
    ASSERT(2, myStack.pop());
    ASSERT(1, myStack.pop());
    ASSERT(myStack.length(), 0);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 FAILED!");
  }
  console.log("##################### STACK ########################");
})();
