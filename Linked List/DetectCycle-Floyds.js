/*
Problem Statement:
------------------
Given head, the head of a linked list, determine if the linked list has a cycle in it. 
Return true if there is a cycle; otherwise, return false.

Examples:
---------
Input: head = [3,2,0,-4], pos = 1
Output: true
Input: head = [1,2], pos = 0
Output: true
Input: head = [1], pos = -1
Output: false

Constraints:
-----------
The number of nodes is in the range [0, 10⁴].
-10⁵ ≤ Node.val ≤ 10⁵
pos is -1 or a valid index in the linked list.

Approach:
--------
Use Floyd’s Cycle Detection (also called the Tortoise and Hare algorithm).
Use two pointers: slow moves one step, fast moves two steps.
If there is a cycle, they will eventually meet. If fast or fast.next becomes null, there’s no cycle.

Time and Space Complexity:
--------------------------
Time Complexity: O(n), where n is the number of nodes in the list.
Space Complexity: O(1), no extra memory used.

*/