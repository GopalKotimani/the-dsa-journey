

/*
Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

Concepts
Recursion: A technique where a function calls itself with a reduced subproblem.
Base Case: Stops recursion to prevent infinite calls. Here, if n === 0, return 0.
Recursive Case: Return n + sum(n - 1).
Time & Space Complexity
Time Complexity: O(n) – one call per value from n to 0.
Space Complexity: O(n) – due to call stack in recursion.
Examples
Input: 5
Output: 15
// 5 + 4 + 3 + 2 + 1 = 15
Approach
If n === 0, return 0 (base case).
Otherwise, return n + sum(n - 1).

*/

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(5)); // 15