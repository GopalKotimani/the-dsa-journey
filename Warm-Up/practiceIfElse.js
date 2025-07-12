/* 1. Sum of Two Integers
Problem Statement:
    Write a Program that defines a function to calculate the sum of two integers and prints the result. 
    Call this function by passing two integer values.
*/

function sum(a, b) {
  let add = a + b;
  console.log(add);
}
sum(5, 3);

/*
2. Square of a Number
Problem Statement:
    Write a function that takes an integer and returns its square. 
    Call this function and prints the result. Square(x) is a function that computes the square of a number. 
    It returns the result instead of printing it.
Example:
    Input: 3
    Process: square(3) = 3 × 3 = 9
    Output: The square is: 9

*/

function square(x) {
  return x * x;
}
let result = square(3);
console.log("The square is:", result);

/*
3. Even or Odd Number
Problem Statement:
    Write a function that accepts a number and checks whether it is Even or Odd. 
    If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. 
    Test the function with inputs 18 and 5.
*/
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
checkEvenOrOdd(18);
checkEvenOrOdd(5);
      
