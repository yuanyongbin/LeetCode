/**
    回文链表
   请判断一个链表是否为回文链表。

    示例 1:

        输入: 1 - > 2
        输出: false
    示例 2:

        输入: 1 - > 2 - > 2 - > 1
        输出: true
    进阶：
        你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
/* 解法一
var isPalindrome = function(head) {
    // 把链表转成数组然后对数组进行判断
    var arr = new Array()
    while (head != null){
        arr.push(head.val)
        head = head.next;
    }
    
    var end = arr.length-1
    var strat = 0;
    if(end == 0)
        return true
    while (end > strat){
        if(arr[end] != arr[strat]){
            return false;
        }
        end--;
        strat++;
    }
    return true;
};
*/
var isPalindrome = function (head) {

    // 获取链表的中点（一次走一步，一次走两步）,然后对后边的链表反转，进行比较
    if (head == null) {
        return true;
    }

    var one = head;
    var two = head;
    while (one.next != null && two.next != null && two.next.next != null) {
        one = one.next;
        two = two.next.next;
    }
    one = reverseList(one.next);
    while (one != null) {
        if (one.val != head.val)
            return false;
        one = one.next;
        head = head.next;
    }
    return true;
};

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