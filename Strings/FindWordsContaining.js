/*
Find words containing character
================================
Problem Statement:
You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x.

The returned array can be in any order.

Example:
Input: words = [“leet”, “code”], x = “e”
Output: [0, 1]

Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “a”
Output: [0, 2]

Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “z”
Output: []

Constraints:
1 ≤ words.length ≤ 50
1 ≤ words[i].length ≤ 50
x is a lowercase English letter
words[i] consists only of lowercase English letters
Approach:
Use two nested loops: Outer loop for each word, inner loop for each character in the word.
If character x is found in a word, push its index to the result array and break.
Time and Space Complexity:
Time Complexity: O(m × n) — where m is the number of words, and n is the max length of a word.
Space Complexity: O(1) — constant extra space (excluding result array).
*/

var findWordsContaining = function(words, x) {
    let resArray = [];
    for(let i = 0; i < words.length; i++){
        // if(words[i].includes(x)){
        //     resArray.push(i);
        // }
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] === x){
                resArray.push(i);
                break;
            }
        }
    }
    return resArray;
};