import {
  ASSERT_ARRAY as ASSERT,
  ASSERT_DIRECT_COMPARE as ASSERT_VALUE,
  logError
} from '../../../util/ASSERT';
import { Graph } from './Graph';
import { graphOneSchema } from './TestGraphs';

(function main() {
  console.log('##################### GRAPH ########################');
  try {
    //Write Test Code Here
    let testGraphOne = graphOneSchema;
    let newGraph = new Graph();
    newGraph.build(testGraphOne);
    ASSERT(newGraph.print(), [1, 2, 4, 3]);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, '# # # Test 1 Failed');
  }
  try {
    //Write Test Code Here
    let testGraphOne = graphOneSchema;
    let newGraph = new Graph();
    newGraph.build(testGraphOne);
    ASSERT(newGraph.DFS(1), true);
    ASSERT(newGraph.DFS(2), true);
    ASSERT(newGraph.DFS(3), true);
    ASSERT(newGraph.DFS(5), false);
    ASSERT(newGraph.DFS(4), true);
    console.log(`# # # Test 2 PASSED`);
  } catch (error) {
    logError(error, '# # # Test 2 Failed');
  }
  try {
    //Write Test Code Here
    let testGraphOne = graphOneSchema;
    let newGraph = new Graph();
    newGraph.build(testGraphOne);
    ASSERT(newGraph.BFS(1), true);
    ASSERT(newGraph.BFS(2), true);
    ASSERT(newGraph.BFS(3), true);
    ASSERT(newGraph.BFS(5), false);
    ASSERT(newGraph.BFS(4), true);
    console.log(`# # # Test 3 PASSED`);
  } catch (error) {
    logError(error, '# # # Test 3 Failed');
  }
  console.log('##################### GRAPH ########################');
})();
