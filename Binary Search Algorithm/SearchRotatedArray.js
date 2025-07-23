/*
Search in Rotated Sorted Array
This problem requires finding a target value in a rotated sorted array nums. 
Using a modified binary search, we determine which half of the array is sorted in each iteration 
and narrow the search range accordingly.

Steps
Initialize two pointers: l = 0 and r = nums.length - 1.
While l ≤ r:
Compute mid: m = l + floor((r - l) / 2).
If nums[m] === target, return m.
Check which side is sorted:
If nums[l] ≤ nums[m], left side is sorted:
If target ∈ [nums[l], nums[m]), move left: r = m - 1.
Else, move right: l = m + 1.
Else, right side is sorted:
If target ∈ (nums[m], nums[r]], move right: l = m + 1.
Else, move left: r = m - 1.
If not found, return -1.
Dry Run
Input: nums = [4,5,6,7,0,1,2], target = 0

m = 3, nums[m] = 7; left sorted [4–7], 0 ∉ → l = 4
l = 4, r = 6 → m = 5, nums[m] = 1; left sorted [0–1], 0 ∈ → r = 4
l = 4, r = 4 → m = 4, nums[4] = 0 → return 4
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3

Several iterations narrow range; eventually l > r.
No match → return -1.
Output: -1

Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)
*/

var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

    }
    return -1;
};