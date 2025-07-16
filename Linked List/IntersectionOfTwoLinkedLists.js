/*
Problem Statement:
------------------
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

Examples:
---------
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at ‘8’
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at ‘2’
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection

Constraints:
------------
The number of nodes in each list is in the range [0, 10⁴].
-10⁵ ≤ Node.val ≤ 10⁵
Lists are guaranteed to be acyclic and maintain their structure.

Approach:
---------
Store all nodes of headB in a Set.
Traverse headA; return the node when one exists in the set.
If no match is found, return null.

Time and Space Complexity:
--------------------------
Time Complexity: O(n + m), where n and m are lengths of listA and listB.
Space Complexity: O(m), storing nodes of listB in a set.
*/


var getIntersectionNode = function (headA, headB) {
    let set = new Set();
    while (headB) {
        set.add(headB);
        headB = headB.next;
    }
    while (headA) {
        if (set.has(headA)) return headA;
        headA = headA.next;
    }
    return null;
};

