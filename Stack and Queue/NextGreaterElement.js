/*
Next Greater Element
Problem Statement:
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Examples:
Example 1:

Input:

nums1 = [4,1,2], nums2 = [1,3,4,2]

Output:[-1,3,-1]

Explanation

The next greater element for each value of nums1 is as follows: - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1. - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3. - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:

Input:

nums1 = [2,4], nums2 = [1,2,3,4]

Output:[3,-1]

Explanation

The next greater element for each value of nums1 is as follows: - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3. - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

Constraints:
1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
Approach:
Initialize an empty map to store each element’s next greater in nums2
Use a stack to process nums2 from right to left.
For each element:
Pop smaller elements from the stack (they can't be NGE).
If stack has a greater element, that’s the NGE.
If not, NGE is -1.
Push current element onto the stack.
Build the answer by mapping elements from nums1 using the precomputed values from the map.
Return the result array.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    let n = nums2.length;
    map[nums2[n - 1]] = -1;
    stack.push(nums2[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            if (stack[stack.length - 1] < nums2[i]) {
                stack.pop();
            } else {
                map[nums2[i]] = stack[stack.length - 1];
                break;
            }
        }
        if (stack.length === 0) {
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    let res = [];
    for (i = 0; i < nums1.length; i++) {
        res[i] = map[nums1[i]];
    }
    return res;
};