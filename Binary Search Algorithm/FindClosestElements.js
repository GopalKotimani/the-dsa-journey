/*
Find k Closest Elements
Given a sorted array, this algorithm returns the k elements closest to a target value x. 
The output is sorted in ascending order.

Steps
We apply binary search to find the best starting index of the k closest elements window.
We compare arr[m + k] - x and x - arr[m] to decide whether to shift the window left or right.
Once we find the optimal window, return the subarray from index l to l + k - 1.
Dry Run
Input: [1, 2, 3, 4, 5], k = 4, x = 3
Output: [1, 2, 3, 4]

Input: [1, 1, 2, 3, 4, 5], k = 4, x = -1
Output: [1, 1, 2, 3]

Time & Space Complexity
Time: O(log(n – k) + k)
Space: O(k)
*/

var findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    let ans = [];
    for (let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
    // return arr.slice(l, l+k);
};