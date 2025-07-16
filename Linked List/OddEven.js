/*
Problem Statement:
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd (1st position), the second is even (2nd position), and so on.

Example:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Constraints:
The number of nodes in the linked list is in the range [0, 104].
-106 ≤ Node.val ≤ 106
Approach:
Maintain two pointers: odd starting from the first node and even from the second.
Also store a reference to evenHead so that we can attach it to the end of the odd list later.
While traversing, link odd nodes together and even nodes together alternately.
Finally, link the last odd node to the head of the even list.
Time and Space Complexity:
Time Complexity: O(n) — Each node is visited exactly once.
Space Complexity: O(1) — In-place manipulation with constant extra space.
*/

var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};