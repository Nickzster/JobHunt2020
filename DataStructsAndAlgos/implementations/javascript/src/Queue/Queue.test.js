import { ASSERT_DIRECT_COMPARE as ASSERT, logError } from "../util/ASSERT";
import { Queue } from "./Queue";

(function main() {
  console.log("##################### QUEUE ########################");
  try {
    //Write Test Code Here
    let myQueue = new Queue();
    myQueue.push(3);
    myQueue.push(2);
    myQueue.push(1);
    ASSERT(myQueue.peek(), 3);
    ASSERT(myQueue.pop(), 3);
    ASSERT(myQueue.pop(), 2);
    ASSERT(myQueue.pop(), 1);
    ASSERT(myQueue.length(), 0);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 FAILED!");
  }
  try {
    //Write Test Code Here
    let myQueue = new Queue();
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    ASSERT(myQueue.peek(), 1);
    ASSERT(myQueue.pop(), 1);
    ASSERT(myQueue.pop(), 2);
    ASSERT(myQueue.pop(), 3);
    ASSERT(myQueue.length(), 0);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 FAILED!");
  }
  console.log("##################### QUEUE ########################");
})();
