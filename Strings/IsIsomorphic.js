/*
Isomorphic Strings
Two strings s and t are isomorphic if the characters in s can be replaced to get t, maintaining a one-to-one mapping between the characters. No two characters may map to the same character but a character may map to itself.

Steps
Initialize two maps: one from s to t and the other from t to s.
Traverse both strings simultaneously.
If a mapping doesn’t exist in either direction, create it.
If the mapping exists but doesn’t match the current characters, return false.
If the loop completes without conflicts, return true.
Dry Run
Input: s = "egg", t = "add"

e → a → map e → a, a → e
g → d → map g → d, d → g
g → d → maps exist and match → OK
All checks passed → return true
Time & Space Complexity
Time Complexity: O(n), where n is the length of the strings
Space Complexity: O(1), as the mappings are bounded by character set size
*/

var isIsomorphic = function (s, t) {
    let mapStoT = {}
    let mapTtoS = {}
    for (let i = 0; i < s.length; i++) {
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if (mapStoT[s[i]] !== t[i]) {
            return false;
        } else if (mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};