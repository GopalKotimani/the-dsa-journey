/*
Find Minimum in Rotated Sorted Array
This problem asks us to find the smallest element in an array that was originally sorted in ascending order and then rotated. The array has no duplicates.

Steps
We use binary search to locate the minimum element efficiently.
Initialize l = 0 and r = a.length - 1.
While l ≤ r:
If a[l] ≤ a[r] → subarray is sorted → return a[l].
Find mid: m = l + floor((r - l) / 2)
If a[m] < a[m - 1] → pivot found → return a[m]
If a[l] > a[m] → rotation point is left → r = m - 1
Else → rotation point is right → l = m + 1
Dry Run
Input: [3,4,5,1,2]

l=0, r=4 → m=2 → 5 > 1 → move left → r=2
m=1 → 4 > 5 → l=2
m=2 → 5 > 1 → r=1
m=0 → 3 < 4 → array sorted → return 1
Output: 1

Input: [4,5,6,70,1,2]

Output: 1

Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)
*/

var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        if (nums[l] <= nums[r]) {
            return nums[l];
        }
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        if (nums[l] > nums[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

};
