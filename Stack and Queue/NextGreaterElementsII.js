/*
Next Greater Element II
Problem Statement:
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn’t exist, return -1 for this number.

Examples:
Example 1:

Input:

nums = [1,2,1]

Output: [2,-1,2]

Explanation:The first 1’s next greater number is 2; The number 2 can’t find next greater number. The second 1’s next greater number needs to search circularly, which is also 2.

Example 2:

Input:

nums = [1,2,3,4,3]

Output: [2,3,4,-1,4]

Example 2:

Input:

temperatures = [30,40,50,60]

Output: [1,1,1,0]

Constraints:
1 <= nums.length <= 104
-109 <= temperatures[i] <= 109
Approach:
Initialize:
n = arr.length
ans = Array(n).fill(-1) → To store result.
stack = [] → To keep track of next greater candidates.
Push last element into stack (start from end).
Traverse from (2n - 2) to 0:
Use i % n to simulate circular behavior.
While stack is not empty:
If current element < top of stack → that is the next greater, store it in ans[i % n] and break.
Else pop the stack (since it’s not greater).
Push current element (arr[i % n]) onto the stack.
Returnans
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let n = nums.length;
    let ans = Array(n).fill(-1);
    stack.push(nums[n - 1]);
    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (nums[i % n] < top) {
                ans[i % n] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(nums[i % n])
    }

    return ans.slice(0, n);
};