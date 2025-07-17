/*
Problem Statement:
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is defined as a maximal substring consisting of non-space characters only.

Example:
Input: s = “Hello World”
Output: 5

Input: s = ” fly me to the moon “
Output: 4

Input: s = “luffy is still joyboy”
Output: 6

Constraints:
1 ≤ s.length ≤ 104
s consists of only English letters and spaces ' '
There will be at least one word in s

Approach:
Start from the end and skip trailing spaces.
Count characters until the next space or beginning of string.
This gives the length of the last word efficiently.

Time and Space Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
*/
/*
Find the length of last word using two loops
==================================================
*/
//Using Built in functions 
var lengthOfLastWord = function (s) {
    s = s.trim().split(' ');
    return (s[s.length - 1].length);
}

//Without Using Built in functions 
var lengthOfLastWord = function (s) {
    let len = s.length - 1;
    while (len >= 0) {
        if (s[len] === ' ') {
            --len;
        } else {
            break;
        }
    }

    let count = 0;
    while (len >= 0) {
        if (s[len] !== ' ') {
            ++count;
            --len;
        } else {
            break;
        }
    }
    return count;
}



    // Find the length of last word using a single loop
    // ==================================================
var lengthOfLastWord = function(s) {
    let len2 = s.length - 1;
    let count2 = 0;
    while (len2 >= 0) {
        if (s[len2] !== ' ') {
            ++count2;
        } else if (count2 > 0) {
            break;
        }
        --len2;
    }
    return count2;
};