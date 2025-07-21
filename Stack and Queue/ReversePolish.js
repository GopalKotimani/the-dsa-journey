/*
Evaluate Reverse Polish Notation
Problem Statement:
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/' .
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
Examples:
Example 1:

Input:

tokens = [“2″,”1″,”+”,”3″,”*”]

Output:9

Explanation

((2 + 1) * 3) = 9

Example 2:

Input:

tokens = [“4″,”13″,”5″,”/”,”+”]

Output:6

Explanation

(4 + (13 / 5)) = 6

Example 3:

Input:

tokens = [“10″,”6″,”9″,”3″,”+”,”-11″,”*”,”/”,”*”,”17″,”+”,”5″,”+”]

Output:22

Explanation


            ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
            = ((10 * (6 / (12 * -11))) + 17) + 5
            = ((10 * (6 / -132)) + 17) + 5
            = ((10 * 0) + 17) + 5
            = (0 + 17) + 5
            = 17 + 5
            = 22
        
Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
Approach:
Initialize a stack to store operands.
Define operator functions using a map:
Each key (+, -, *, /) maps to a function that performs the respective operation on two numbers.
Loop through each token in the input array:
If the token is an operator:
Pop the top two values from the stack.
Convert them to numbers and apply the operator function.
Push the result back to the stack
If the token is a number:
Push it directly to the stack.
Return the final result by popping the last element from the stack and converting it to a number.
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(n)

Dry Run
Input:

 arr = ["2", "1", "+", "3", "*"] 
State Transitions:

 Initialize: stack = []
i = 0 → arr[0] = "2"
→ Not an operator → stack.push("2") → stack = ["2"]

i = 1 → arr[1] = "1"
→ Not an operator → stack.push("1") → stack = ["2", "1"]

i = 2 → arr[2] = "+"
→ Operator found
→ a = stack.pop() = "1"
→ b = stack.pop() = "2"
→ ans = map["+"](1, 2) = 3
→ stack.push(3) → stack = [3]

i = 3 → arr[3] = "3"
→ Not an operator → stack.push("3") → stack = [3, "3"]

i = 4 → arr[4] = ""
→ Operator found
→ a = stack.pop() = "3"
→ b = stack.pop() = 3
→ ans = map[""](3, 3) = 9
→ stack.push(9) → stack = [9]
Final Output: 9

Final State: stack = [] (after popping result)
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let map ={
        "+" : (a, b) => (b + a),
        "-" : (a, b) => (b - a),
        "*" : (a, b) => (b * a),
        "/" : (a, b) => (Math.trunc(b / a)),
    }
    for(let i = 0; i < tokens.length; i++){
        if(map[tokens[i]]){
            let a = stack.pop();
            let b = stack.pop();
            let res = map[tokens[i]](Number(a), Number(b));
            stack.push(res);
        }else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());

};