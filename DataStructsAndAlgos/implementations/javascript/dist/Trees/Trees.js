"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BinaryTree = exports.Heap = exports.BST = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function TreeNode(elem) {
  _classCallCheck(this, TreeNode);

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
    key: "traverseToBottom",
    value: function traverseToBottom(newElem, current, next) {
      while (!!next) {
        current = next;
        if (newElem >= next.elem) next = next.right;else next = next.left;
      }
    }
  }, {
    key: "traverseToFind",
    value: function traverseToFind(elemToFind, current, prev) {
      while (!!current && current.elem !== elemToFind) {
        prev = current;
        if (elemToFind >= current.elem) current = elemToRemove.right;else current = current.left;
      }
    }
  }, {
    key: "traverseToLargestSubTree",
    value: function traverseToLargestSubTree(ptr, prevPtr) {
      while (!!ptr.right && !!ptr.right.right) {
        prevPtr = ptr;
        ptr = ptr.right;
      }
    }
  }, {
    key: "insert",
    value: function insert(newElem) {
      var newNode = new TreeNode(newElem);
      if (this.root === null) this.init(newNode);else if (!this.root.left && newElem < this.root.elem) this.root.left = newNode;else if (!this.root.right && newElem >= this.root.elem) this.root.right = newNode;else {
        var ptrs = {
          current: this.root,
          next: this.root
        };
        var current = this.root;
        var next = this.root; //TODO: Refactor into traverse method.

        while (!!next) {
          current = next;
          if (newElem >= next.elem) next = next.right;else next = next.left;
        }

        if (newElem >= current.elem && !current.right) current.right = newNode;else current.left = newNode;
      }
    }
  }, {
    key: "removeByElem",
    value: function removeByElem(elem) {
      if (this.root.left === null && this.root.right === null) this.cleanup();else {
        var prev = this.root;
        var _elemToRemove = this.root; //TODO: Refactor into traverse method

        while (!!_elemToRemove && _elemToRemove.elem !== elem) {
          prev = _elemToRemove;
          if (elem >= _elemToRemove.elem) _elemToRemove = _elemToRemove.right;else _elemToRemove = _elemToRemove.left;
        }

        if (!_elemToRemove.left && !_elemToRemove.right) {
          //case 0: elementToRemove has no children
          //figure out which side elemToRemove is from prev
          if (!!prev.right && prev.right.elem === _elemToRemove.elem) prev.right = null;else prev.left = null;
        } else if (!_elemToRemove.left || !_elemToRemove.right) {
          prev.elem = _elemToRemove.elem; //case 1: elemToRemove has ONLY a right child

          if (!_elemToRemove.left && !!_elemToRemove.right) prev.right = null; //case 2: elemToRemove has ONLY a left child
          else prev.left = null;
        } else {
          //case 3: elemToRemove has both a left child and a right child
          var newPtr = _elemToRemove;
          _elemToRemove = _elemToRemove.left;
          prev = newPtr; //TODO: Refactor into traverse method

          while (!!_elemToRemove.right) {
            prev = _elemToRemove;
            _elemToRemove = _elemToRemove.right;
          }

          newPtr.elem = _elemToRemove.elem;

          if (!!_elemToRemove.left) {
            if (prev.left === _elemToRemove) prev.left = _elemToRemove.left;else prev.right = _elemToRemove.left;
            _elemToRemove.left = null;
          } else {
            if (prev.left === _elemToRemove) prev.left = null;else prev.right = null;
          }
        }
      }
    } //Traversals

  }, {
    key: "PreOrderRecursive",
    value: function PreOrderRecursive(returnArray) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (!root) return;
      returnArray.push(root.elem);
      this.PreOrderRecursive(returnArray, root.left);
      this.PreOrderRecursive(returnArray, root.right);
    }
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

exports.BST = BST;

var Heap = function Heap() {
  _classCallCheck(this, Heap);
};

exports.Heap = Heap;

var BinaryTree = function BinaryTree() {
  _classCallCheck(this, BinaryTree);
};

exports.BinaryTree = BinaryTree;