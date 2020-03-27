"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.stack = [];
  } // Stack.push(elem)
  // @desc: Pushes the specified elem onto the stack.
  // @runtime: O(1)
  // @space: O(1)


  _createClass(Stack, [{
    key: "push",
    value: function push(elem) {
      this.stack.push(elem);
    } // Stack.pop()
    // @desc: Removes the top element off the stack
    // @runtime: O(1)
    // @space: O(1)

  }, {
    key: "pop",
    value: function pop() {
      var elem = this.stack.peek();
      this.stack.pop();
      return elem;
    } // Stack.peek()
    // @desc: Peeks at the top element of the stack
    //@runtime: O(1)
    //@space: O(1)

  }, {
    key: "peek",
    value: function peek() {
      return this.stack[this.stack.length - 1];
    } //Stack.search(elem)
    //@desc: Searches for the specified elem in the stack.
    //@runtime: O(n)
    //@space: O(1)

  }, {
    key: "search",
    value: function search(elem) {
      for (var i = 0; i < stack.length; i++) {
        if (this.stack[i] === elem) return i;
      }

      return -1;
    } //Stack.access(elem)
    //@desc: Access an element inside of the stack
    //@runtime: O(n)
    //@space O(1)

  }, {
    key: "access",
    value: function access(elem) {
      return search(elem);
    }
  }, {
    key: "length",
    value: function length() {
      return this.stack.length;
    }
  }]);

  return Stack;
}();

exports.Stack = Stack;