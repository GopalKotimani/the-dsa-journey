/*
Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. 
You must do this by modifying the input array in-place with O(1)extra memory.

Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]
Output:[“o”,”l”,”l”,”e”,”h”]
*/

var reverseString = function(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};