import { BST } from "./BST";
import { ASSERT_ARRAY as ASSERT, logError } from "../../../util/ASSERT";

// try {
//   //Write Test Code Here
//   console.log(`# # # Test # PASSED`);
// } catch (error) {
//   console.log(error);
//   console.log(
//     `# # # Test # Failed`
//   );
// }

(function main() {
  console.log(
    "######################## BINARY SEARCH TREE ########################"
  );
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(2);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(3);
    myTree.insert(6);
    myTree.insert(8);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [5, 2, 1, 3, 7, 6, 8]);
    ASSERT(myTree.SearchIterative("BFS"), [5, 2, 7, 1, 3, 6, 8]);
    ASSERT(myTree.SearchIterative("DFS"), [5, 2, 1, 3, 7, 6, 8]);
    ASSERT(myTree.BinarySearchIterative(7), true);
    ASSERT(myTree.BinarySearchIterative(5), true);
    ASSERT(myTree.BinarySearchIterative(8), true);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 Failed");
  }
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(3);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(2);
    myTree.insert(6);
    myTree.insert(8);
    ASSERT(myTree.BinarySearchIterative(7), true);
    myTree.removeByElem(7);
    ASSERT(myTree.BinarySearchIterative(7), false);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [5, 3, 1, 2, 6, 8]);
    ASSERT(myTree.SearchIterative("BFS"), [5, 3, 6, 1, 8, 2]);
    console.log(`# # # Test 2 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 2 Failed");
  }
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(3);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(2);
    myTree.insert(6);
    myTree.insert(8);
    myTree.removeByElem(5);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [3, 1, 2, 7, 6, 8]);
    console.log(`# # # Test 3 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 3 Failed");
  }
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(3);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(2);
    myTree.insert(6);
    myTree.insert(8);
    myTree.removeByElem(2);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [5, 3, 1, 7, 6, 8]);
    console.log(`# # # Test 4 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 4 Failed");
  }
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(2);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(3);
    myTree.insert(6);
    myTree.insert(8);
    myTree.removeByElem(2);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [5, 1, 3, 7, 6, 8]);
    console.log(`# # # Test 5 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 5 Failed");
  }
  try {
    //Write Test Code Here
    let myTree = new BST();
    myTree.insert(5);
    myTree.insert(2);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(3);
    myTree.insert(6);
    myTree.insert(8);
    myTree.removeByElem(5);
    let preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    ASSERT(preOrderArr, [3, 2, 1, 7, 6, 8]);
    console.log(`# # # Test 6 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 6 Failed");
  }
})();
