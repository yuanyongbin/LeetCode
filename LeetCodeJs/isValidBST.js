/*
	验证二叉搜索树

		给定一个二叉树，判断其是否是一个有效的二叉搜索树。

	假设一个二叉搜索树具有如下特征：

		节点的左子树只包含小于当前节点的数。
		节点的右子树只包含大于当前节点的数。
		所有左子树和右子树自身必须也是二叉搜索树。

	示例 1:

		输入:
			2
		   / \
		  1   3
		输出: true

	示例 2:

		输入:
			5
		   / \
		  1   4
			 / \
			3   6
	输出: false
		解释: 输入为: [5,1,4,null,null,3,6]。
			 根节点的值为 5 ，但是其右子节点值为 4 。



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
var isValidBST = function(root) {
    var checkChild = function(root, centerVal, dir) {
        if (!root) {
            return true;
        }
        var val = root.val; /*        左子树*/
        if (dir == 'left' && val >= centerVal) {
            return false;
        } /*        右子树*/
        if (dir == 'right' && val <= centerVal) {
            return false;
        }
        return checkChild(root.left, centerVal, dir) && checkChild(root.right, centerVal, dir);
    }

    function readNode(root) {
        if (!root) {
            return true;
        }
        if ((!checkChild(root.left, root.val, 'left')) || (!checkChild(root.right, root.val, 'right'))) {
            return false;
        }
        return readNode(root.left) && readNode(root.right);
    }
return readNode(root);
};