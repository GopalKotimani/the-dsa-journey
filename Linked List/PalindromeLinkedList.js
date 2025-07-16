/*
Problem Statement:
------------------
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Examples:
----------
Input: head = [1,2,2,1]
Output: true
Input: head = [1,2]
Output: false

Constraints:
------------
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

Approach 1:
-----------
Traverse the linked list and store values in an array.
Check whether the array is a palindrome by comparing elements from start and end moving towards the center.

Time and Space Complexity:
--------------------------
Time Complexity: O(n), where n is the number of nodes.
Space Complexity: O(n), for the array storage.
*/

var isPalindrome = function (head) {
    let arr = [];
    let curr = head;
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left++] !== arr[right--]) return false;
    }
    return true;
};


/*
Approach 2:
------------
Use two pointers (slow and fast) to find the middle of the linked list.
Reverse the second half of the list.
Compare the first and second halves node by node.

Time and Space Complexity:
--------------------------
Time Complexity: O(n)
Space Complexity: O(1)

*/

var isPalindrome = function (head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare two halves
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};