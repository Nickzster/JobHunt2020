"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logError = logError;
exports.ASSERT_DIRECT_COMPARE = exports.ASSERT_ARRAY = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Error = function Error(message, expected, actual) {
  _classCallCheck(this, Error);

  this.message = message;
  this.expected = expected;
  this.actual = actual;
};

var ASSERT_ARRAY = function ASSERT_ARRAY(actual, expected) {
  if (_typeof(expected) !== _typeof(actual)) throw new Error("# # # ERROR: Types do not match! # # #", expected, actual);
  if (expected.length !== actual.length) throw new Error("# # # ERROR: Not the same length! # # #", expected, actual);

  for (var i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) throw new Error("# # # ERROR: expected ".concat(expected[i], " at ").concat(i, " DOES NOT MATCH actual ").concat(actual[i], " at ").concat(i, " # # #"), expected, actual);
  }
};

exports.ASSERT_ARRAY = ASSERT_ARRAY;

var ASSERT_DIRECT_COMPARE = function ASSERT_DIRECT_COMPARE(actual, expected) {
  if (actual !== expected) throw new Error("# # # ERROR: actual(".concat(actual, ") does NOT match expected(").concat(expected, ")"), expected, actual);
};

exports.ASSERT_DIRECT_COMPARE = ASSERT_DIRECT_COMPARE;

function logError(error, message) {
  console.log("MESSAGE: ", error.message);
  console.log("ACTUAL: ", error.actual);
  console.log("EXPECTED", error.expected);
  console.log(message);
}