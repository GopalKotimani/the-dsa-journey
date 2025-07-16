/*
Problem Statement:
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list’s nodes (i.e., only nodes themselves may be changed.)

Examples:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Input: head = []
Output: []

Input: head = [1]
Output: [1]

Constraints:
The number of nodes in the list is in the range [0, 100].
0 ≤ Node.val ≤ 100

Approach (Recursive):
Base case: if the list is empty or has only one node, return the head.
Let l be the first node and r be the second.
Call swapPairs recursively for the rest of the list starting from r.next.
Set l.next to the result of recursive call.
Make r point to l and return r as the new head.

Time and Space Complexity:
Time Complexity: O(n), where n is the number of nodes in the list.
Space Complexity: O(n) due to recursive call stack.
*/

var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};
  