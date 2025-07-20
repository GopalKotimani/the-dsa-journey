/*
Implement Stack using Two Queues
Problem Statement:
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:


void push(int x)Pushes element x to the top of the stack.
int pop()Removes the element on the top of the stack and returns it..
int top()Returns the element on the top of the stack.
boolean empty()Returns true if the stack is empty, false otherwise.
Notes

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue’s standard operations.
Examples
Example 1:

Input:[“MyStack”, “push”, “push”, “top”, “pop”, “empty”] [[], [1], [2], [], [], []]

Output:[null, null, null, 2, 2, false]

Explanation MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // return 2 myStack.pop(); // return 2 myStack.empty(); // return False

Constraints:
1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and topare valid.
Follow-up: Can you implement the stack using only one queue?

Approach
Initialize Two Queues.
Just add the element to q1. (q1.push(x))
Remove the last pushed element (i.e., rear of q1).
Similar to pop(), but instead of removing the last element.
Check if q1 is empty.
*/


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    //Using 2 queues
    /* let len = this.q1.length;
    for(let i = 0; i < len-1; i++){
        this.q2.push(this.q1.shift());
    }
    let res = this.q1.shift();
    [this.q2, this.q1] = [this.q1, this.q2];
    return res; 
    */

    //Using same queue
    let len = this.q1.length;
    for(let i = 0; i < len-1; i++){
        this.q1.push(this.q1.shift());
    }
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    //Using 2 queues
   /*  let len = this.q1.length;
    for(let i = 0; i < len-1; i++){
        this.q2.push(this.q1.shift());
    }
    let front = this.q1[0];
    this.q2.push(this.q1.shift());
    [this.q2, this.q1] = [this.q1, this.q2];
    return front;
    */
    let len = this.q1.length;
    for(let i = 0; i < len-1; i++){
        this.q1.push(this.q1.shift());
    }
    let res = this.q1[0];
    this.q1.push(this.q1.shift());
    return res;

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */