const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._searchNode(this._root, data) !== null;
  }

  find(data) {
    const node = this._searchNode(this._root, data);
    return node !== null ? node.data : null;
  }

  _searchNode(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  _findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }

  min() {
    if (this._root === null) {
      return null;
    }

    let node = this._root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let node = this._root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};