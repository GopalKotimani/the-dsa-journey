  /* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. To accommodate this, 
nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3
       nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
  */
//Approach1: Brute Force
//Sort and merge the arrays
  
  /*
Optimal Approach2
We have two sorted arrays:

nums1 with length m + n where the first m elements are valid.
nums2 with n elements.
The goal: merge nums2 into nums1 in sorted order in-place.

Start filling nums1 from the end (index m + n - 1), 
comparing the last elements of both arrays (nums1[m-1] and nums2[n-1]).

Place the larger element at the current last position.

Move pointers accordingly:

Decrement the pointer in nums1 or nums2.
Decrement the position pointer for placement.
If nums2 is exhausted first, merging is done.

If nums1 is exhausted first, copy remaining elements of nums2.
  */
  
  
  
  var merge = function(nums1, m, nums2, n) {
      let nums1Copy = nums1.slice(0, m)
      let p1 = 0;
      let p2 = 0;
      for (let i = 0; i < m + n; i++) {
          if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
              nums1[i] = nums1Copy[p1];
              p1++;
          } else {
              nums1[i] = nums2[p2];
              p2++;
          }
      }
  };