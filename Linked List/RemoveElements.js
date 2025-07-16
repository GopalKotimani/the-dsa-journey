/*
Problem Statement:
Given the head of a linked list and an integer val, remove all the nodes of the linked list that have Node.val == val, and return the new head.

Examples:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Input: head = [], val = 1
Output: []
Input: head = [7,7,7,7], val = 7
Output: []
Constraints:
The number of nodes in the list is in the range [0, 10⁴]
1 ≤ Node.val ≤ 50
0 ≤ val ≤ 50
Approach:
Use a dummy (sentinel) node before the head to simplify edge cases.
Iterate through the list using a pointer.
Skip any node whose value matches val.
Return the next of sentinel as the new head.
Time and Space Complexity:
Time Complexity: O(n)
Space Complexity: O(1)

*/


var removeElements = function (head, val) {
    let sentinel = new ListNode(0, head);
    let current = sentinel;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return sentinel.next;
};

