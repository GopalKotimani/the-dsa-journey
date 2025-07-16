/*
Problem Statement:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 ≤ Node.val ≤ 100
Both list1 and list2 are sorted in non-decreasing order.
Approach:
Use a dummy node to simplify handling of the head.
Iterate through both lists and append the smaller value node to the merged list.
Once one list is exhausted, append the remaining part of the other list.
Return the merged list starting from dummy.next
*/

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let curr = null;
    if (list1.val < list2.val) {
        curr = list1;
        list1 = list1.next;
    } else {
        curr = list2;
        list2 = list2.next;
    }
    let start = curr;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2;
    return start;
};


