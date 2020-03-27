"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(elem) {
  _classCallCheck(this, Node);

  this.elem = elem;
  this.left = null;
  this.right = null;
};

var BST = /*#__PURE__*/function () {
  function BST() {
    _classCallCheck(this, BST);

    this.root = null;
  }

  _createClass(BST, [{
    key: "init",
    value: function init(newNode) {
      this.root = newNode;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.root = null;
    }
  }, {
    key: "insert",
    value: function insert(newElem) {
      if (this.root === null) this.init(newNode);else {
        var ptr = this.root;

        while (!!ptr.left && !!ptr.right) {
          if (ptr) {}
        }
      }
    }
  }, {
    key: "removeByElem",
    value: function removeByElem(elem) {} //Traversals

  }, {
    key: "PreOrderRecursive",
    value: function PreOrderRecursive(returnArray) {}
  }, {
    key: "InOrderRecursive",
    value: function InOrderRecursive(returnArray) {}
  }, {
    key: "PostOrderRecursive",
    value: function PostOrderRecursive(returnArray) {}
  }, {
    key: "PreOrderIterative",
    value: function PreOrderIterative() {}
  }, {
    key: "InOrderIterative",
    value: function InOrderIterative() {} //Searches

  }, {
    key: "BinarySearchIterative",
    value: function BinarySearchIterative(elem) {}
  }, {
    key: "BinarySearchRecursive",
    value: function BinarySearchRecursive(elem) {}
  }, {
    key: "BFSIterative",
    value: function BFSIterative(elem) {}
  }, {
    key: "BFSRecursive",
    value: function BFSRecursive(elem) {}
  }, {
    key: "DFSIterative",
    value: function DFSIterative(elem) {}
  }, {
    key: "DFSIterative",
    value: function DFSIterative(elem) {}
  }]);

  return BST;
}();