import { FibonacciNaive, Fibonacci } from "./Fibonacci";

import {
  ASSERT_DIRECT_COMPARE as ASSERT,
  logError,
  ASSERT_DIRECT_COMPARE
} from "../../../util/ASSERT";

(function main() {
  console.log("##################### FIBONACCI ########################");
  try {
    //Write Test Code Here
    ASSERT(Fibonacci(1), 0);
    ASSERT(Fibonacci(2), 1);
    ASSERT(Fibonacci(3), 1);
    ASSERT(Fibonacci(4), 2);
    ASSERT(Fibonacci(5), 3);
    ASSERT(Fibonacci(6), 5);
    let fibOfN = Fibonacci(100);
    console.log(fibOfN);
    console.log(`# # # Test 1 PASSED`);
  } catch (error) {
    logError(error, "# # # Test 1 Failed");
  }
  console.log("##################### FIBONACCI ########################");
})();
