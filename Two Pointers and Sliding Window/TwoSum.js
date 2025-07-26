/*
Problem Statement:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples:
Example 1:
Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6

Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6

Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 10 9
-109 <= target <= 10 9
Only one valid answer exists.
Approach 1 (Brute-force: Two Pointers)
Loop through all pairs of elements in the array using two nested loops.
For each pair (i, j), check if nums[i] + nums[j] === target.
If yes, return the indices [i, j].
Time Complexity:
Time Complexity = O(n2)

Space Complexity:
Space Complexity = O(1)

Dry Run
Input:

 nums = [4, 1, 2] target = 3 
State Transitions:

 Initialize: → n = nums.length = 3
First loop: i = 0
Inner loop: j = 1
→ nums[0] + nums[1] = 4 + 1 = 5 ≠ 3 → continue
Inner loop: j = 2
→ nums[0] + nums[2] = 4 + 2 = 6 ≠ 3 → continue

Second loop: i = 1
Inner loop: j = 2
→ nums[1] + nums[2] = 1 + 2 = 3 === target
→ return [1, 2]
Final Output: [1, 2]

Final State: Loop exited early after finding the pair at indices 1 and 2.
*/

var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff] && map[diff] !== i) {
            return [i, map[diff]];
        }
    }
};