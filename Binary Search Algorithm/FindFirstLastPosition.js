/*
Find First &amp; Last Position in Sorted Array
This problem asks us to find the first and last positions of a given target in a sorted array. If the target is not found, return [-1, -1].

Steps
Use binary search twice:
Once to find the **first occurrence** (left bound)
Once to find the **last occurrence** (right bound)
Store results in ans[0] and ans[1].
Dry Run
Input: [5,7,7,8,8,10], target = 8

First binary search finds index 3
Second binary search finds index 4
Answer: [3, 4]
Input: [5,7,7,8,8,10], target = 6

Output: [-1, -1]

Input: [5,7,7,8,8,10], target = 0

Output: [-1, -1]

Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)
*/

var searchRange = function (arr, target) {
    //Finding left index 
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    if (arr[l] === target) {
        ans[0] = l;
    }

    //Finding right index 
    l = 0;
    r = arr.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2)
        if (arr[m] > target) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    if (arr[l] === target) {
        ans[1] = l;
    }
    return ans;
};