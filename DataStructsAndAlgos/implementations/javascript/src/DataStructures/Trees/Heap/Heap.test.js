import {
  ASSERT_ARRAY as ASSERT,
  ASSERT_DIRECT_COMPARE as ASSERT_VALUES,
  logError
} from "../../../util/ASSERT";
import { ArrayMinHeap as Heap } from "./Heap";

(function() {
  console.log("##################### HEAP ########################");
  try {
    //Write Test Code Here
    let myHeap = new Heap();
    myHeap.push(1);
    myHeap.push(2);
    myHeap.push(6);
    myHeap.push(3);
    myHeap.push(5);
    myHeap.push(4);
    ASSERT(myHeap.print(), [1, 2, 4, 3, 5, 6]);
    let removed = myHeap.remove();
    ASSERT(myHeap.print(), [2, 3, 4, 6, 5]);
    ASSERT_VALUES(removed, 1);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 Failed");
  }
  try {
    //Write Test Code Here
    let myHeap = new Heap();
    myHeap.push(10);
    myHeap.push(8);
    myHeap.push(6);
    myHeap.push(1);
    myHeap.push(4);
    ASSERT(myHeap.print(), [1, 4, 8, 10, 6]);
    let removed = myHeap.remove();
    ASSERT(myHeap.print(), [4, 6, 8, 10]);
    ASSERT_VALUES(removed, 1);
    console.log(`# # # Test 2 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 2 Failed");
  }

  try {
    //Write Test Code Here
    let myHeap = new Heap();
    myHeap.push(3);
    myHeap.push(4);
    myHeap.push(2);
    myHeap.push(1);
    myHeap.push(5);
    ASSERT(myHeap.sort(), [1, 2, 3, 4, 5]);
    console.log(`# # # Test 3 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 3 Failed");
  }

  try {
    //Write Test Code Here
    let myHeap = new Heap();
    myHeap.push(10);
    myHeap.push(2);
    myHeap.push(3);
    myHeap.push(5);
    myHeap.push(4);
    myHeap.push(1);
    myHeap.push(8);
    myHeap.push(7);
    myHeap.push(6);
    myHeap.push(9);
    ASSERT(myHeap.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(`# # # Test 4 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 4 Failed");
  }
  try {
    //Write Test Code Here
    let myHeap = new Heap();
    myHeap.push(100);
    myHeap.push(20);
    myHeap.push(30);
    myHeap.push(50);
    myHeap.push(40);
    myHeap.push(10);
    myHeap.push(80);
    myHeap.push(70);
    myHeap.push(60);
    myHeap.push(90);
    ASSERT(myHeap.sort(), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    console.log(`# # # Test 5 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 5 Failed");
  }

  console.log("##################### HEAP ########################");
})();
