/**
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  	if (!root) {
	    return true;
	}
	var Symmetric = function(p, q) {
        
        if (p == null && q != null) {
            return false;
        }
        
        if (p != null && q == null) {
            return false;
        } 
        
        /* 查询到子节点都为null时结束。*/
        if (p == null && q == null) {
            return true;
        }
        
        if (p.val != q.val) {
            return false;
        } 
        
        /* 递归对比左叶与右叶。*/
            return Symmetric(p.left, q.right) && Symmetric(p.right, q.left);
        };
    
	return Symmetric(root.left, root.right);
};