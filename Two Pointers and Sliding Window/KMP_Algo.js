/*
Find Index of First Occurrence in String
Problem Statement:
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Examples:
Example 1:
Input:haystack = “sadbutsad”, needle = “sad”

Output:0

Explanation: “sad” occurs at index 0 and 6.The first occurrence is at index 0, so we return 0.

Example 2:
Input:haystack = “leetcode”, needle = “leeto”

Output:-1

Explanation: “leeto” did not occur in “leetcode”, so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
Approach
Loop through each index i in haystack where needle could start (0 to n - m).
For each i, compare needle with the substring starting at i.
If all characters match, return i.
If no match is found, return -1.
Time Complexity:
Time Complexity = O(n * m)

Space Complexity:
Space Complexity = O(1)
*/

var strStr = function (haystack, needle) {
    //Time - O(m*n)
    let n = haystack.length;
    let m = needle.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
};

/*
KMP (Knuth-Morris-Pratt) Algorithm
Problem Statement:
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Examples:
Example 1:
Input:haystack = “sadbutsad”, needle = “sad”

Output:0

Explanation: “sad” occurs at index 0 and 6.The first occurrence is at index 0, so we return 0.

Example 2:
Input:haystack = “leetcode”, needle = “leeto”

Output:-1

Explanation: “leeto” did not occur in “leetcode”, so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
Approach
Build LPS (Longest Prefix Suffix) Array for the needle:
Helps in skipping repeated characters when a mismatch happens.
lps[i] stores the length of the longest proper prefix which is also a suffix for needle[0...i].
Search in haystack using LPS:
Compare characters of haystack and needle.
On mismatch, use the LPS array to shift the needle efficiently without rechecking characters.
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(m)

Dry Run
Input: haystack = "hello", needle = "ll"

 
// Step 1: Build LPS (Longest Prefix Suffix) array for needle = "ll"

needle = "ll"
Initialize: lps = [0] 
i = 0, j = 1

Compare needle[1] === needle[0] → 'l' === 'l' → match 
→ lps[1] = i + 1 = 1 
→ i = 1, j = 2

End of loop → Final LPS = [0, 1]

// Step 2: Search needle in haystack using KMP

haystack = "hello", needle = "ll"
n = 5, m = 2

Initialize: i = 0, j = 0

Compare haystack[0] = 'h', needle[0] = 'l' → mismatch 
→ j == 0 → i++ → i = 1

Compare haystack[1] = 'e', needle[0] = 'l' → mismatch 
→ j == 0 → i++ → i = 2

Compare haystack[2] = 'l', needle[0] = 'l' → match 
→ i++, j++ → i = 3, j = 1

Compare haystack[3] = 'l', needle[1] = 'l' → match 
→ i++, j++ → i = 4, j = 2

Now j == m → full match found 
→ return i - m = 4 - 2 = 2 
Output: Result: 2
*/

var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;
    while (j < m) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            ++i;
            ++j;
        } else {
            if (i === 0) {
                lps[j] = 0;
                ++j;
            } else {
                i = lps[i - 1];
            }
        }
    }

    i = j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            ++i; ++j;
        } else {
            if (j === 0) {
                ++i;
            } else {
                j = lps[j - 1];
            }
        }
        if (j === m) {
            return i - m;
        }
    }
    return -1;
}
