"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Queue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = [];
  } //Queue.peek()
  // @desc: Pushes the specified elem onto the stack.
  // @runtime: O(1)
  // @space: O(1)


  _createClass(Queue, [{
    key: "peek",
    value: function peek() {
      if (this.length() >= 1) return this.queue[0];else return -1;
    } // Queue.pop()

  }, {
    key: "pop",
    value: function pop() {
      var value = this.peek();
      this.queue.shift();
      return value;
    } //Queue.dequeue()

  }, {
    key: "dequeue",
    value: function dequeue() {
      this.pop();
    } //Queue.push(elem)

  }, {
    key: "push",
    value: function push(elem) {
      this.queue.push(elem);
    } //Queue.enqueue(elem)

  }, {
    key: "enqueue",
    value: function enqueue(elem) {
      push(elem);
    } //Queue.search(elem)
    //@desc: Searches for the specified elem in the queue.
    //@runtime: O(n)
    //@space: O(1)

  }, {
    key: "search",
    value: function search(elem) {
      for (var i = 0; i < this.length(); i++) {
        if (this.queue[i] === elem) return i;
      }

      return -1;
    } //Queue.access(elem)
    //@desc: Access an element inside of the queue
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
      return this.queue.length;
    }
  }, {
    key: "displayQueue",
    value: function displayQueue() {
      return this.queue;
    }
  }]);

  return Queue;
}();

exports.Queue = Queue;