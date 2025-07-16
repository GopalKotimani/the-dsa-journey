/*
Problem Statement:
Find the middle node of a singly linked list using the slow and fast pointer approach.

Approach:
---------
Use two pointers: slow and fast.
Initialize both at the head of the list.
Move slow one step and fast two steps at a time.
When fast reaches the end, slow will be at the middle.

Examples:
----------
Input: [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node is node 3.
Input: [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: There are two middle nodes: 3 and 4. We return the second one.

Constraints:
------------
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

Time & Space Complexity:
-----------------------
Time Complexity: O(n)
Space Complexity: O(1)

Use Case:
--------
This technique is efficient with O(n) time and O(1) space, 
commonly used in problems like finding the start of a loop, checking palindromes, etc.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};