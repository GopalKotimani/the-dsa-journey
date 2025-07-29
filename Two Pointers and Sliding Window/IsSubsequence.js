/*
Is subsequence
Problem Statement:
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Examples:
Example 1:

Input: s = “abc”, t = “ahbgdc”

Output: true

Example 2:

Input: s = “axc”, t = “ahbgdc”

Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
Approach:
Use two pointers i (for string s) and j (for string t).
Traverse through t using j.
If characters match (s[i] === t[j]), move i to the next character.
Always move j
If i reaches the end of s, it means all characters of s are found in t in order.
Return true if i === s.length, else false.
*/

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};