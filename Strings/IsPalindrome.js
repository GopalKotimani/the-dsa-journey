
/*
Valid Palindrome
The goal of this problem is to determine whether a given string is a palindrome, 
considering only alphanumeric characters and ignoring cases. 
A palindrome reads the same forward and backward after removing non-alphanumeric characters.
*/


var isPalindrome = function (s) {

    // Approach using string filtering and reversal and extra space
    s = s.toLowerCase();
    let filteredString = "";
    let rev = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredString += s[i];
            rev = s[i] + rev;
        }
    }
    return rev === filteredString;
}

var isPalindrome = function (s) {
    // Alternative approach using two pointers
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        } else {
            return false;
        }
    }
    return true;
};