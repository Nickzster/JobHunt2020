"use strict";

var _Trees = require("./Trees");

var _ASSERT = require("../util/ASSERT");

// try {
//   //Write Test Code Here
//   console.log(`# # # Test # PASSED`);
// } catch (error) {
//   console.log(error);
//   console.log(
//     `# # # Test # Failed`
//   );
// }
function logError(error, message) {
  console.log('MESSAGE: ', error.message);
  console.log('ACTUAL: ', error.actual);
  console.log('EXPECTED', error.expected);
  console.log(message);
}

(function main() {
  console.log('######################## BINARY SEARCH TREE ########################');

  try {
    //Write Test Code Here
    var myTree = new _Trees.BST();
    myTree.insert(5);
    myTree.insert(3);
    myTree.insert(7);
    myTree.insert(1);
    myTree.insert(2);
    myTree.insert(6);
    myTree.insert(8);
    var preOrderArr = [];
    myTree.PreOrderRecursive(preOrderArr);
    (0, _ASSERT.ASSERT_ARRAY)(preOrderArr, [5, 3, 1, 2, 7, 6, 8]);
    console.log("# # # Test 1 PASSED");
  } catch (error) {
    logError(error, '# # # Test 1 Failed');
  }

  try {
    //Write Test Code Here
    var _myTree = new _Trees.BST();

    _myTree.insert(5);

    _myTree.insert(3);

    _myTree.insert(7);

    _myTree.insert(1);

    _myTree.insert(2);

    _myTree.insert(6);

    _myTree.insert(8);

    _myTree.removeByElem(7);

    var _preOrderArr = [];

    _myTree.PreOrderRecursive(_preOrderArr);

    (0, _ASSERT.ASSERT_ARRAY)(_preOrderArr, [5, 3, 1, 2, 6, 8]);
    console.log("# # # Test 2 PASSED");
  } catch (error) {
    logError(error, '# # # Test 2 Failed');
  }

  try {
    //Write Test Code Here
    var _myTree2 = new _Trees.BST();

    _myTree2.insert(5);

    _myTree2.insert(3);

    _myTree2.insert(7);

    _myTree2.insert(1);

    _myTree2.insert(2);

    _myTree2.insert(6);

    _myTree2.insert(8);

    _myTree2.removeByElem(5);

    var _preOrderArr2 = [];

    _myTree2.PreOrderRecursive(_preOrderArr2);

    (0, _ASSERT.ASSERT_ARRAY)(_preOrderArr2, [3, 1, 2, 7, 6, 8]);
    console.log("# # # Test 3 PASSED");
  } catch (error) {
    logError(error, '# # # Test 3 Failed');
  }

  try {
    //Write Test Code Here
    var _myTree3 = new _Trees.BST();

    _myTree3.insert(5);

    _myTree3.insert(3);

    _myTree3.insert(7);

    _myTree3.insert(1);

    _myTree3.insert(2);

    _myTree3.insert(6);

    _myTree3.insert(8);

    _myTree3.removeByElem(2);

    var _preOrderArr3 = [];

    _myTree3.PreOrderRecursive(_preOrderArr3);

    (0, _ASSERT.ASSERT_ARRAY)(_preOrderArr3, [5, 3, 1, 7, 6, 8]);
    console.log("# # # Test 4 PASSED");
  } catch (error) {
    logError(error, '# # # Test 4 Failed');
  }

  try {
    //Write Test Code Here
    var _myTree4 = new _Trees.BST();

    _myTree4.insert(5);

    _myTree4.insert(2);

    _myTree4.insert(7);

    _myTree4.insert(1);

    _myTree4.insert(3);

    _myTree4.insert(6);

    _myTree4.insert(8);

    _myTree4.removeByElem(2);

    var _preOrderArr4 = [];

    _myTree4.PreOrderRecursive(_preOrderArr4);

    (0, _ASSERT.ASSERT_ARRAY)(_preOrderArr4, [5, 1, 3, 7, 6, 8]);
    console.log("# # # Test 5 PASSED");
  } catch (error) {
    logError(error, '# # # Test 5 Failed');
  }

  try {
    //Write Test Code Here
    var _myTree5 = new _Trees.BST();

    _myTree5.insert(5);

    _myTree5.insert(2);

    _myTree5.insert(7);

    _myTree5.insert(1);

    _myTree5.insert(3);

    _myTree5.insert(6);

    _myTree5.insert(8);

    _myTree5.removeByElem(5);

    var _preOrderArr5 = [];

    _myTree5.PreOrderRecursive(_preOrderArr5);

    (0, _ASSERT.ASSERT_ARRAY)(_preOrderArr5, [3, 2, 1, 7, 6, 8]);
    console.log("# # # Test 6 PASSED");
  } catch (error) {
    logError(error, '# # # Test 6 Failed');
  }

  console.log('################# TERMINATING BINARY SEARCH TREE ###################');
})();