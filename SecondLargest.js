/*
Problem Statement:
    Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Requirements:
    The array must contain at least two elements.
    If all elements are equal, return: No second largest found.
    If the array has fewer than two elements, return: Array should have at least two numbers.
*/

function secondLargest(arr) {
  if (arr.length < 2) return "Array should have at least two numbers";
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? "No second largest found" : second;
}
console.log(secondLargest([0, 3, 5, 2, 7, 9])); // 7