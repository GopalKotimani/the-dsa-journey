/*
Remove Outermost Parentheses
Problem Statement:
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.


Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.


Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Examples:
Example 1:

Input:

s = “(()())(())”

Output:"()()()"

Explanation

The input string is “(()())(())”, with primitive decomposition “(()())” + “(())”. After removing outer parentheses of each part, this is “()()” + “()” = “()()()”.

Example 2:

Input:

s = “(()())(())(()(()))”

Output:"()()()()(())"

Explanation

The input string is “(()())(())(()(()))”, with primitive decomposition “(()())” + “(())” + “(()(()))”. After removing outer parentheses of each part, this is “()()” + “()” + “()(())” = “()()()()(())”.

Example 2:

Input:

s = “()()”

Output:""

Explanation

The input string is “()()”, with primitive decomposition “()” + “()”. After removing outer parentheses of each part, this is “” + “” = “”.

Constraints:
1 <= s.length <= 105
s[i] is either '(' or ')'.
sis a valid parentheses string.
Approach:
Initialize:
stack to track open parentheses.
ans to build the final string without outer parentheses.
Loop through the string:
If character is '('
Push to stack.
Add to ans only if stack size > 1 (not outermost).
If character is ')'
Add to ans only if stack size > 1 (not outermost).
Pop from stack.
Return the final ansstring.
*/

/**
 * @param {string} s
 * @return {string}
 */

//Using Stack
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.push(s[i]);
            if(stack.length > 1){
                ans = ans + s[i];
            }
        }else{
            if(stack.length > 1){
                ans = ans + s[i];
            }
            stack.pop();
        }
    }
    return ans;
};