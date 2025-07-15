/*
Problem
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples
Input: nums = [2, 2, 1] → Output: 1
Input: nums = [4, 1, 2, 1, 2] → Output: 4
Input: nums = [1] → Output: 1

Approach 1: Brute Force (Hash Map)
Create an empty hash map to store counts of each element.
Loop through the array, update the count for each element.
Loop again to find the element with count 1 and return it.
*/
var singleNumber = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
};


/*
Approach 2: Dry Run
Input: [4, 1, 2, 1, 2]

Step 1: Counting frequency

Insert 4 → hash[4] = 1
Insert 1 → hash[1] = 1
Insert 2 → hash[2] = 1
Update 1 → hash[1] = 2
Update 2 → hash[2] = 2
Step 2: Find element with count 1

4 → hash[4] = 1 → Return 4

Time and Space Complexity
Time Complexity: O(n)
We traverse the array twice: once for counting and once for checking.

Space Complexity: O(n)
The hash map may store counts for up to n elements in the worst case.
*/

var singleNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};