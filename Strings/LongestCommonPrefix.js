/*
Longest Common Prefix
This problem focuses on finding the longest common prefix string shared among an array of strings. If no common prefix exists, the result should be an empty string.

Steps
Initialize a pointer x to track character positions in the first string.
Iterate through each character of the first string using while loop.
For every character at position x in the first string, compare it with the character at the same position in the other strings.
If a mismatch is found or if the current index exceeds the length of any string, return the substring from the first string from 0 to x.
If the loop completes without any mismatch, return the first string entirely (it is the common prefix).
Dry Run
Input: ["flower", "flow", "flight"]

x = 0: Compare ‘f’ with all → match
x = 1: Compare ‘l’ → match
x = 2: Compare ‘o’ vs ‘i’ → mismatch
Return "fl"
Time & Space Complexity
Time Complexity: O(n·m), where n is the number of strings and m is the length of the shortest string
Space Complexity: O(1), as no extra space is used apart from variables
*/

var longestCommonPrefix = function (strs) {
    let x = 0;
    while (x < strs[0].length) {
        let ch = strs[0][x];
        for (let i = 1; i < strs.length; i++) {
            if ((ch !== strs[i][x]) || (x === strs[i].length)) {
                return strs[0].substring(0, x);
            }
        }
        ++x;
    }
    return strs[0];
};