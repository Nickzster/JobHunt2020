"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedList = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(elem) {
  _classCallCheck(this, Node);

  this.elem = elem;
  this.next = null;
};

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  _createClass(LinkedList, [{
    key: "isEmpty",
    value: function isEmpty() {
      if (this.count === 0) return true;
      return false;
    }
  }, {
    key: "init",
    value: function init(newNode) {
      this.head = newNode;
      this.tail = newNode;
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      this.count = 0;
      this.head = null;
      this.tail = null;
    }
  }, {
    key: "insert",
    value: function insert(newElem) {
      var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var newNode = new Node(newElem);
      if (this.isEmpty()) this.init(newNode);else {
        if (location >= this.count) {
          //insert at rear
          this.tail.next = newNode;
          this.tail = this.tail.next;
        } else if (location <= 0) {
          //insert at front
          newNode.next = this.head;
          this.head = newNode;
        } else {
          //insert at i
          var ptr = this.head;

          for (var i = 0; i < location; i++) {
            ptr = ptr.next;
          }

          newNode.next = ptr.next;
          ptr.next = newNode;
        }
      }
      this.count++;
    }
  }, {
    key: "removeElem",
    value: function removeElem() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ptr = this.head;
      if (this.count === 1) this.cleanUp();else {
        if (location <= 0) {
          //remove from front
          this.head = this.head.next;
          ptr.next = null;
        } else if (location >= this.count) {
          //remove from rear
          for (var i = 0; i < this.count - 2; i++) {
            ptr = ptr.next;
          }

          this.tail = ptr;
          this.tail.next = null;
        } else {
          //remove at i
          for (var _i = 0; _i < location - 1; _i++) {
            ptr = ptr.next;
          }

          var nodeToRemove = ptr.next;
          ptr.next = nodeToRemove.next;
          nodeToRemove.next = null;
        }
      }
      this.count--;
    }
  }, {
    key: "search",
    value: function search(value) {
      var ptr = this.head;

      while (!!ptr && ptr.value !== value) {
        ptr = ptr.next;
      }

      if (!!ptr) return false;
      return true;
    }
  }, {
    key: "displayLinkedList",
    value: function displayLinkedList() {
      var displayArray = [];
      var ptr = this.head;

      while (ptr !== null) {
        displayArray.push(ptr.elem);
        ptr = ptr.next;
      }

      return displayArray;
    }
  }]);

  return LinkedList;
}();

exports.LinkedList = LinkedList;