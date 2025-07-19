/*
Valid Anagram
This problem checks whether two strings are anagrams of each other. Two strings are anagrams if they contain the exact same characters with the same frequency but possibly in a different order.

Steps
First, check if the lengths of both strings are equal. If not, return false.
Create a hashmap (or character counter) to store the frequency of characters in the first string.
Iterate over the second string and decrease the corresponding frequency in the map.
If a character is not found or the count goes below zero, return false.
If all characters match, return true at the end.
Dry Run
Input: s = "anagram", t = "nagaram"

Build map from s: {a:3, n:1, g:1, r:1, m:1}
Scan t:
n → found → decrement
a → found → decrement
g → found → decrement
a → found → decrement
r → found → decrement
a → found → decrement
m → found → decrement
All values are zero → return true
Time & Space Complexity
Time Complexity: O(n), where n is the length of the strings
Space Complexity: O(1), since the character set is limited to 26 lowercase letters
*/

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let map = {};

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            ++map[s[i]];
        }
    }
    for(let i = 0; i < t.length; i++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false;
        }else{
            --map[t[i]]
        }
    }
    return true;

};