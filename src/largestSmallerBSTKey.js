/*
* (Pramp Code Challenge) Largest Smaller BST Key
* Given a root of a binary search tree and a key x, find the largest key in the tree that is smaller than x.
*
* Example: if an in-order list of all keys in the tree is {2, 3, 4, 7, 17, 19, 21, 35, 89} and x is 19, the biggest key that is smaller than x is 17.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.leftChild = null;
    this.rightChild = null;
  }
}

/*
 * @param {Node} root
 * @param {number} val
 * @return {number}
 */
function largestSmallerBSTKey(root, x) {
  var prevNode;
  while(root !== null) {
    if (root.val < x) {
      prevNode = root;
      root = root.rightChild;
    } else {
      root = root.leftChild;
    }
  }
  return prevNode;
}

// https://en.wikipedia.org/wiki/Binary_search_tree#/media/File:Binary_search_tree.svg
var root = new Node(8);

root.leftChild = new Node(3);
root.leftChild.leftChild = new Node(1);

root.leftChild.rightChild = new Node(6);
root.leftChild.rightChild.leftChild = new Node(4);
root.leftChild.rightChild.rightChild = new Node(7);

root.rightChild = new Node(10);
root.rightChild.rightChild = new Node(14);
root.rightChild.rightChild.leftChild = new Node(13);

console.log(largestSmallerBSTKey(root, 7));

var newRoot = new Node(7);
newRoot.leftChild = new Node(6);
newRoot.rightChild = new Node(8);

console.log(largestSmallerBSTKey(newRoot, 7));
