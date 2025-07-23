/*
Guess Higher or Lower
This problem uses binary search to find a hidden number between 1 and n using a feedback API guess(num), which tells us whether our guess is too high, too low, or correct.

Steps
Initialize two pointers: l = 1 and r = n.
Use binary search to guess the middle number m.
If guess(m) returns:
0 → m is the correct number
-1 → the picked number is smaller → move left
1 → the picked number is larger → move right
Repeat until the number is found.
Dry Run
Input: n = 10, pick = 6

Guess 5 → too low
Guess 8 → too high
Guess 6 → correct
Output: 6

Edge Case
Input: n = 1, pick = 1

Output: 1

Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)
*/

var guessNumber = function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res < 0) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};