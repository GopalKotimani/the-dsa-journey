/*
Problem Statement:
Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

Requirements:
Handles both positive and negative integers.
Return falsefor negative numbers (not Palindromes).

Examples:
Input:121
Output:true

Input:-121
Output:false
*/
var isPalindrome = function(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
};

console.log(isPalindrome(121)); // true