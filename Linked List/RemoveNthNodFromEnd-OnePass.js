/*
Problem Statement:
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Approach (Optimized Two-Pointer):
Use a dummy node before the head to handle edge cases easily.
Move the first pointer n steps ahead.
Move both first and second pointers until first reaches the end.
Now second is just before the node to be deleted. Skip it using second.next = second.next.next.
Time and Space Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode(0, head);
    let first = sentinel;

    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    let second = sentinel;
    while (first.next) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return sentinel.next;
};
