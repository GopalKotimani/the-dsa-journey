/*
Find Peak Element
This problem involves finding any **peak element** in an array. A peak element is an element that is strictly greater than its neighbors. The array is unsorted, but there’s guaranteed to be at least one peak.

Steps
We use binary search to find a peak efficiently.
Initialize l = 0 and r = arr.length - 1.
While l < r:
Find middle: m = l + floor((r - l) / 2)
If arr[m] < arr[m + 1] → we are in ascending slope → shift l = m + 1
Else → we are in descending slope or peak → move r = m
Loop ends when l == r, that’s the index of a peak.
Dry Run
Input: [12, 3, 1]

m = 1 → 3 < 1 → r = 1
m = 0 → 12 > 3 → r = 0
l == r == 0 → return 0
Output: 0 (12 is a peak)

Input: [1,2,1,3,5,6,4]

There are multiple peaks possible, e.g. index 1 (2), 5 (6)

Output: 5 (or any valid peak index)

Time & Space Complexity
Time Complexity: O(log n) — binary search used
Space Complexity: O(1)
*/

var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length-1; 

    while(l < r){
        let mid = l + Math.floor((r - l)/2);
        if(nums[mid] < nums[mid+1]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    return l;

};
