/*
1. Print All Even Numbers in an Array
    Problem Statement:
    Write a program to print all even numbers from an array.
*/
let arr = [10, 3, 5, 2, 7, 6, 9];
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    }
}

/*
2. Count Negative Numbers in an Array
    Problem Statement:
    Write a function that returns the number of negative numbers in an array.
*/
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let array = [2, -6, 4, 8, 1, -9];
let result = countNegativeNumbers(array);
console.log("Result:", result); // Output: 2


/*
3. Find Smallest Number in an Array
    Problem Statement:
    Write a function that returns the smallest number in an array.
*/
function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arrFindSmallest = [2, -6, 4, 8, 1, -9];
let resultFindSmallest = findSmallest(arrFindSmallest);
console.log("Result:", resultFindSmallest); // Output: -9

/*
4. Find Largest Number in an Array
    Problem Statement:
    Write a function that returns the largest number in an array.
*/
function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    }
    return largest;
}
let arrFindLargest = [2, -6, 4, 8, 1, -9];
let resultFindLargest = findLargest(arrFindLargest);
console.log("Result:", resultFindLargest); // Output: 8
      