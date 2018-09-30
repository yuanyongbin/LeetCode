/**

给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
     var res = [];
    if (!root) {
        return res;
    }
    var stack = [root];
    while (stack.length > 0) {
        var item = stack[stack.length - 1];
        if (!item.left || (item.left && item.left.isOk)) {
            stack.pop();
            item.isOk = true;
            res.push(item.val);
            item.right && stack.push(item.right);
        } else if (item.left && !item.left.isOk) {
            stack.push(item.left);
        }
    }
    return res;
};