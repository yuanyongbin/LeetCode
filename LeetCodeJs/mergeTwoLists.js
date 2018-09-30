/**
   
   将两个有序链表合并为一个新的有序链表并返回。 新链表是通过拼接给定的两个链表的所有节点组成的。

    示例：

        输入： 1 - > 2 - > 4, 1 - > 3 - > 4
        输出： 1 - > 1 - > 2 - > 3 - > 4 - > 4
 */


 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
 var mergeTwoLists = function (l1, l2) {
     var newbine = new ListNode(); // 创建一个新的节点
     var combine = newbine; // 头节点
     if (l1 == null) {
         return l2;
     }
     if (l2 == null) {
         return l1;
     }
     while (l1 != null && l2 != null) {

         if (l1.val <= l2.val) { // 把小的赋值给新节点
             console.log('l1 : ' + l1.val)
             newbine.next = l1;
             l1 = l1.next;
             newbine = newbine.next;
         } else {
             console.log('l2 : ' + l2.val)
             newbine.next = l2;
             l2 = l2.next;
             newbine = newbine.next;
         }

         if (l1 == null) { // 当其中一个链表为空，则把灵位一个赋值给 新节点
             newbine.next = l2;
         }

         if (l2 == null) {
             newbine.next = l1;
         }
     }
     return combine.next;
 };