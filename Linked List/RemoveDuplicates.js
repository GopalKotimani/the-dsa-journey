/*
Problem Statement:
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example:
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 ≤ Node.val ≤ 100
The list is guaranteed to be sorted in ascending order.
Approach:
Iterate through the linked list with a current pointer.
For each node, compare its value with the next node.
If they are equal, skip the next node using curr.next = curr.next.next.
Otherwise, move to the next node.
Time and Space Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
*/

var deleteDuplicates = function (head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};