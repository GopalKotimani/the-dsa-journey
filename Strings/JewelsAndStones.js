/*
Jewels and Stones using two nested loops
Problem Statement:
You’re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is different from "A".

Example:
Input: jewels = “aA”, stones = “aAAbbbb”
Output: 3

Input: jewels = “z”, stones = “ZZ”
Output: 0

Constraints:
1 ≤ jewels.length, stones.length ≤ 50
jewels and stones consist of only English letters
All characters in jewels are unique
Approach 1 :
Use two nested loops: Outer loop over stones, inner loop over jewels.
If a character in stones matches any in jewels, increment the count.
Break inner loop once matched to avoid redundant checks.
Time and Space Complexity:
Time Complexity: O(m × n) — where m is the length of stones and n is the length of jewels.
Space Complexity: O(1) — constant extra space.
*/

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                ++count;
                break;
            }
        }
    }
    return count;
};


//Jewels and Stones using Set

var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();

    for(let i = 0; i < jewels.length; i++){
        jSet.add(jewels[i]);
    }

    let count = 0;
    for(let j = 0; j < stones.length; j++){
        if(jSet.has(stones[j])){
            count++;
        }
    }
    return count;
};