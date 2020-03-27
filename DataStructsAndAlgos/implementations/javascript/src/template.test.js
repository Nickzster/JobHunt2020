import { ASSERT_DIRECT_COMPARE as ASSERT, logError } from "./util/ASSERT";

(function main() {
  console.log("##################### TEST ########################");
  try {
    //Write Test Code Here
    console.log(`# # # Test # PASSED`);
  } catch (error) {
    logError(error, "# # # Test # Failed");
  }
  console.log("##################### TEST ########################");
})();
