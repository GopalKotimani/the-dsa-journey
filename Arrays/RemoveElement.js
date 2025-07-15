/*
Problem Statement:
Given an integer array nums and an integer val, remove all occurrences of val in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which are not equal to val.
Example:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

var removeElement = function(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
};
   