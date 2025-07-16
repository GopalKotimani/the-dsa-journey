/*
Problem Statement:
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Examples:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Input: head = [1], n = 1
Output: []
Input: head = [1,2], n = 1
Output: [1]
Constraints:
The number of nodes in the list is sz.
1 ≤ sz ≤ 30
0 ≤ Node.val ≤ 100
1 ≤ n ≤ sz
Approach:
Use a sentinel (dummy) node before the head to simplify edge cases.
First, calculate the total length of the list.
Find the previous node of the one to be deleted using the length – n formula.
Update the links to skip the target node.
Time and Space Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};
