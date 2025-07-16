/*
Problem Statement:
Given the head of a linked list, rotate the list to the right by k places.

Examples:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 ≤ Node.val ≤ 100
0 ≤ k ≤ 2 * 109

Approach:
First, compute the length of the list.
Adjust k using modulo: k = k % length.
Use two pointers: move one k steps ahead, then move both until the first reaches the end.
Rewire the pointers to rotate the list, breaking it at the new tail.
*/

var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let stepsToNewHead = length - k;
    let prev = null;
    let curr = head;
    while (stepsToNewHead--) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = null;
    tail.next = head;
    return curr;
};