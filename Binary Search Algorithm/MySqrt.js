/*
Square Root of X
This problem is about finding the floor value of the square root of a non-negative integer x. You cannot use built-in square root functions. The goal is to use binary search to compute the answer efficiently.

Steps
If x is 0 or 1, return x.
Set the binary search range: l = 2, r = floor(x / 2).
Use binary search to find the greatest number m such that m * m ≤ x.
If m * m === x, return m.
If m * m > x, search left side.
If m * m < x, search right side.
Return r as the floor square root.
Dry Run
Input: x = 4

l = 2, r = 2 → m = 2
2 * 2 = 4 → return 2
Output: 2

Input: x = 8

l = 2, r = 4 → m = 3 → 3*3 = 9 > 8 → r = 2
l = 2, r = 2 → m = 2 → 2*2 = 4 < 8 → l = 3
Loop ends → return r = 2
Output: 2

Time & Space Complexity
Time Complexity: O(log x)
Space Complexity: O(1)
*/

var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (x === mid ** 2) {
            return mid;
        } else if (x < mid ** 2) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return r; // Near to the squar root value of x
};
//O logn 

/*
This problem is about computing the floor of the square root of a number x 
using an optimized binary search approach. A best practice in binary search is to calculate 
the mid-point in a way that avoids integer overflow: m = l + (r - l) / 2.
*/