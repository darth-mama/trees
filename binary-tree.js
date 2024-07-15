class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    if (!node.left) return this.minDepth(node.right) + 1;
    if (!node.right) return this.minDepth(node.left) + 1;

    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    let result = 0;

    function helper(node) {
      if (!node) return 0;
      const left = Math.max(0, helper(node.left));
      const right = Math.max(0, helper(node.right));
      result = Math.max(result, node.val + left + right);
      return node.val + Math.max(left, right);
    }

    helper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let result = null;

    while (queue.length) {
      let node = queue.shift();

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
