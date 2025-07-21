/*
Valid Parentheses
Problem Statement:
Given a string s containing just the characters '(', ')', '{', '}', ‘[' and ']', determine if the input string is valid.

An input string is valid if:


Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order
Every close bracket has a corresponding open bracket of the same type.
Examples
Example 1:

Input:s = “()”

Output:true

Example 2:

Input:s = “()[]{}”

Output:true

Example 3:

Input:s = “(]”

Output:false

Example 4:

Input:s = “([])”

Output:true

Constraints:
1<= s.length <= 104
s consists of parentheses only '()[]{}'.
Approach
Use two stacks:
s1 for pushing new elements (input stack).
s2 for popping/peeking elements in correct FIFO order (output stack).
push(x):Simply push element x into s1.
pop():
If s2 is empty, transfer all elements from s1 to s2 (reverse order).
Then pop from s2.
peek():
If s2 is empty, transfer all elements from s1 to s2.
Return the top of s2.
empty(): Return true if both s1 and s2 are empty.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            stack.push(s[i]);
        }else {
            let top = stack.pop();
            if(!top || s[i] !== map[top]){
                return false;
            }
        }
    }
    return stack.length === 0;
};