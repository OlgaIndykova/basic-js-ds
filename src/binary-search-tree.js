const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    if (!this.root) {
      return false;
    }
    else {
      return null;
    }
  }

  add(data) {
    function addData(node, value) {
        if (!node) {
          return value;
        }
        if (node.value === value) {
          return node;
        }

        if (value < node.value) {
          node.left = addData(node.left, value);
        }
        if (value > node.value) {
          node.right = addData(node.right, value);
        }
        return node;
      }
    if (this.root && data) {
      this.root = addData(this.root, data); 
    } else {
      return false;
    }
  }

  has(data) {
    return doesHave(this.root, data);
    function doesHave(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      return value < node.value ?
        doesHave(node.left, value) :
        doesHave(node.right, value);
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.root = delNode(this.root, data);

    function delNode(node, value) {
      if (!node) {
        return null;
      }
      if (node < node.value) {
        node.left = delNode(node.left, value);
        return node;
      } else if (node.value < node) {
        node.right = delNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;

        }
        node.value = minRight.value;
        node.right = delNode(node.right, minRight.value);
        return node;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};