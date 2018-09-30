/**
    环形链表
        给定一个链表，判断链表中是否有环。

    进阶：
        你能否不使用额外空间解决此题？
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 快指针追慢指针一定追上的就是环形链表
    if (head == null) {
        return false
    }
    if (head.next == null) {
        return false;
    }
    var quick = head;
    var slow = head
    while (quick != null && quick.next != null && slow != null) {
        quick = quick.next.next;
        slow = slow.next;
        if (quick == slow) {
            return true
        }

    }
    return false;
};