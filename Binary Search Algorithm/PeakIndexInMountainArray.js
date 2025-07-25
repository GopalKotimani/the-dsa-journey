/*
Find Peak in a Mountain Array
This algorithm finds the peak element in a mountain array using binary search. A mountain array increases to a peak and then decreases.

Steps
Initialize l = 0 and r = arr.length - 1
Use binary search:
If arr[m + 1] > arr[m], peak is to the right → l = m + 1
Else peak is at m or to the left → r = m
When loop ends, l (or r) is the peak index
Dry Run
Input: [0,1,0] → Output: 1

Input: [0,2,1,0] → Output: 1

Input: [0,10,5,2] → Output: 1

Time & Space Complexity
Time: O(log n)
Space: O(1)

*/

var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else if (arr[m] > arr[m + 1]) {
            r = m
        }
    }
    return l;
};