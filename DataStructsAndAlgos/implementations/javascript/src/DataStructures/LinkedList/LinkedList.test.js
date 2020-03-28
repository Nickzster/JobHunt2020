import { LinkedList } from "./LinkedList";
import { ASSERT_ARRAY as ASSERT } from "../../util/ASSERT";

(function main() {
  console.log("######################## LINKED LIST ########################");

  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i, i);
    }
    ASSERT(myList.displayLinkedList(), [0, 1, 2, 3, 4, 5]);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 1 FAILED`);
  }
  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i, 100);
    }
    myList.removeElem(3);
    ASSERT(myList.displayLinkedList(), [0, 1, 2, 4, 5]);
    console.log(`# # # Test 2 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 2 FAILED`);
  }
  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i);
    }
    ASSERT(myList.displayLinkedList(), [5, 4, 3, 2, 1, 0]);
    console.log(`# # # Test 3 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 3 FAILED`);
  }
  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i, Infinity);
    }
    myList.removeElem();
    ASSERT(myList.displayLinkedList(), [1, 2, 3, 4, 5]);
    console.log(`# # # Test 4 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 4 FAILED`);
  }
  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i, Infinity);
    }
    myList.removeElem(Infinity);
    ASSERT(myList.displayLinkedList(), [0, 1, 2, 3, 4]);
    console.log(`# # # Test 5 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 5 FAILED`);
  }
  try {
    //Write Test Code Here
    let myList = new LinkedList();
    for (let i = 0; i < 6; i++) {
      myList.insert(i, Infinity);
    }
    myList.removeElem(Infinity);
    ASSERT(myList.search(0), true);
    ASSERT(myList.search(1), true);
    ASSERT(myList.search(2), true);
    ASSERT(myList.search(3), true);
    ASSERT(myList.search(4), true);
    ASSERT(myList.search(5), true);
    ASSERT(myList.search(6), false);
    ASSERT(myList.search(-1), false);
    console.log(`# # # Test 6 PASSED`);
  } catch (error) {
    console.log(error);
    console.log(`# # # Test 6 FAILED`);
  }
  console.log("################# TERMINATING LINKED LIST ###################");
})();
