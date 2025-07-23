/*
First Bad Version
This problem finds the first bad version in a sequence of versions from 1 to n. We have an API isBadVersion(version) that returns whether a version is bad. We use binary search to pinpoint the earliest bad version.

Steps
Initialize pointers: l = 1 and r = n.
While l < r:
Compute mid: m = l + floor((r - l) / 2).
If isBadVersion(m) is false → move right (l = m + 1).
Else (true) → move left or stay (r = m).
Loop ends when l == r, which is the first bad version.
Return r.
Dry Run
Input: n = 5, bad = 4

l=1, r=5 → m=3 → isBad(3)=false → l=4
l=4, r=5 → m=4 → isBad(4)=true → r=4
l==r==4 → return 4
Output: 4

Input: n = 1, bad = 1

l=1, r=1 → no loop → return 1
Output: 1

Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)
*/



/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);
            if (!isBadVersion(mid)) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return r;
    };
};