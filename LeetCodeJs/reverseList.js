/**
 * 反转一个单链表。

    示例:

        输入: 1 - > 2 - > 3 - > 4 - > 5 - > NULL
        输出: 5 - > 4 - > 3 - > 2 - > 1 - > NULL
    进阶:
        你可以迭代或递归地反转链表。 你能否用两种方法解决这道题？

 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var rHead = null; // 反转后的头节点
    var curr = head;  // 当前处理节点
    var pTail = null; // 反转后尾节点
    while (curr != null) {
        var pNext = curr.next;
        if (pNext == null)
            rHead = curr;
        curr.next = pTail;
        pTail = curr;
        curr = pNext;
    }
    return rHead;
};