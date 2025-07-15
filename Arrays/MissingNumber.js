/*
Problem
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

Approach 1 (Brute-force with sorting and comparison)
Sort the array.
Loop from index 1 to n - 1:
If nums[i] != nums[i-1] + 1, return nums[i-1] + 1 as the missing number.
If no such mismatch is found:
If nums[0] != 0, return 0.
Else return n.
Dry Run
Input: nums = [4, 2, 1, 0, 5]

After Sorting: nums = [0, 1, 2, 4, 5]

Check:
i = 1 → 1 == 0 + 1
i = 2 → 2 == 1 + 1
i = 3 → 4 != 2 + 1 → return 3
Output: 3

Time and Space Complexity
Time Complexity: O(n log n)
Due to sorting the array.

Space Complexity: O(1)
*/


var missingNumber = function (nums) {
    let n = nums.length;
    let total_sum = (n * (n + 1)) / 2;
    let sum_of_array = 0;

    for (let num of nums) {
        sum_of_array += num;
    }

    return total_sum - sum_of_array;
};
