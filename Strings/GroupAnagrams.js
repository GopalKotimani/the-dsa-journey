/*
Group Anagrams &#8211; Approach 1 &#8211; Sorted Key
The goal is to group words that are anagrams of each other. An anagram is a word formed by rearranging the letters of another word. This approach uses a sorted version of each string as a unique key to group anagrams together.

Steps
Initialize a hashmap to store grouped anagrams.
For each word in the input list:
Sort the characters in the word alphabetically.
Use the sorted string as a key.
Add the original word to the list at that key.
Return all grouped lists of anagrams from the hashmap.
Dry Run
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Sorted Keys: “aet” → [“eat”, “tea”, “ate”], “ant” → [“tan”, “nat”], “abt” → [“bat”]
Return: [["eat","tea","ate"],["tan","nat"],["bat"]]
Time & Space Complexity
Time Complexity: O(n·k·log k), where n is the number of strings and k is the average length of each string (due to sorting)
Space Complexity: O(n·k), for storing grouped anagrams
*/

//Sorted Key Approach
var groupAnagrams = function (strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");
        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }
    }
    return [...Object.values(map)];
};

//Using hashed Key 
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        //Create the key 
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
        }
        //Fill the map 
        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }
    return [...Object.values(map)];
};

