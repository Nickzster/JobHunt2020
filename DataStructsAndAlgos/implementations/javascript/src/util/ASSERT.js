class Error {
  constructor(message, expected, actual) {
    this.message = message;
    this.expected = expected;
    this.actual = actual;
  }
}

export const ASSERT_ARRAY = (actual, expected) => {
  if (typeof expected !== typeof actual)
    throw new Error("# # # ERROR: Types do not match! # # #", expected, actual);
  if (expected.length !== actual.length)
    throw new Error(
      "# # # ERROR: Not the same length! # # #",
      expected,
      actual
    );
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i])
      throw new Error(
        `# # # ERROR: expected ${expected[i]} at ${i} DOES NOT MATCH actual ${actual[i]} at ${i} # # #`,
        expected,
        actual
      );
  }
};

export const ASSERT_DIRECT_COMPARE = (actual, expected) => {
  if (actual !== expected)
    throw new Error(
      `# # # ERROR: actual(${actual}) does NOT match expected(${expected})`,
      expected,
      actual
    );
};

export function logError(error, message) {
  console.log("MESSAGE: ", error.message);
  console.log("ACTUAL: ", error.actual);
  console.log("EXPECTED", error.expected);
  console.log(message);
}
