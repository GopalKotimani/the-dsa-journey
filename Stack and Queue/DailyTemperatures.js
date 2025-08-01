/*
Daily Temperatures
Problem Statement:
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Examples:
Example 1:

Input:

temperatures = [73,74,75,71,69,72,76,73]

Output: [1,1,4,2,1,1,0,0]

Example 2:

Input:

temperatures = [30,40,50,60]

Output: [1,1,1,0]

Example 2:

Input:

temperatures = [30,60,90]

Output: [1,1,0]

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
Approach:
Traverse from right to left (last to first day).
Stack stores indices of days with temperatures in decreasing order.
For each element:
Pop from stack until you find a warmer day.
If stack is not empty, the top is the next warmer day → store the difference.
Push current day index onto the stack.
*/

var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    stack.push(n-1);
    let ans = Array(n).fill(0);

    for(let i = n-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i] >= arr[top]){
                stack.pop();
            }else{
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);

    }
    return ans;
};