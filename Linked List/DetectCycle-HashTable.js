/*
Problem Statement:
------------------
Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle; otherwise, return false.

Examples:
---------
Input: head = [3,2,0,-4], pos = 1
Output: true
Input: head = [1,2], pos = 0
Output: true
Input: head = [1], pos = -1
Output: false

Constraints:
------------
The number of nodes is in the range [0, 10⁴].
-10⁵ ≤ Node.val ≤ 10⁵
pos is -1 or a valid index in the linked list.

Approach:
---------
Use a Set to track visited nodes.
While traversing, if we encounter a node already in the set, we’ve found a cycle.
If we reach null, there’s no cycle.

Time and Space Complexity:
--------------------------
Time Complexity: O(n), where n is the number of nodes in the list.
Space Complexity: O(n), in the worst case we store all nodes in a set.

*/

var hasCycle = function (head) {
    let seenNodes = new Set();
    let curr = head;
    while (curr !== null) {
        if (seenNodes.has(curr)) {
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
};
