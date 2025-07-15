/*

Linear Search is a simple search algorithm used to find a specific element in an array. 
It checks each element of the array one by one until the target value is found or the end 
of the array is reached.

Example 1:
Input: arr = [2, 4, 7, 10], target = 10
    Output: 3
    Explanation: 10 is found at index 3

*/
  let arr = [4, 5, 1, 3, 9];
  
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
  }
  
  let result = linearSearch(arr, 5);
  console.log("Element found at index", result);