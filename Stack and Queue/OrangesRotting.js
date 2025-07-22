/*
Rotting Oranges
Problem Statement:
You are given an m x n grid where each cell can have one of three values:


0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Examples:
Example 1:

Input:

grid = [[2,1,1],[0,1,1],[1,0,1]]

Output: -1

Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 2:

Input:

grid = [[0,2]]

Output: 0

Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

For more details, refer to LeetCode problem 994.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
Approach:
Identify rotten oranges (2) and push their positions + time ([i, j, 0]) into a queue.
Use BFS to spread rot in 4 directions (up, down, left, right).
For each direction: If neighbor is a fresh orange (1), rot it (→ 2) and push it into the queue with time +1.
Track time with maxMinutes.
After BFS, if any fresh orange (1) left, return -1.
Else, return maxMinutes.

State Transitions:

 Initialize: m = 3, n = 3 queue = []
→ Scanning grid:
Found rotten orange at (0,0) → queue = [[0,0,0]]

Start BFS:
queue = [[0,0,0]]
maxMinutes = 0

Pop [0,0,0]
→ (0,1) is fresh → rot it → queue.push([0,1,1])
→ (1,0) is fresh → rot it → queue.push([1,0,1])
maxMinutes = max(0, 0) = 0

Pop [0,1,1]
→ (0,2) is fresh → rot it → queue.push([0,2,2])
→ (1,1) is fresh → rot it → queue.push([1,1,2])
maxMinutes = max(1, 0) = 1

Pop [1,0,1]
→ (2,0) is 0 (empty) → skip
maxMinutes = max(1, 1) = 1

Pop [0,2,2]
→ (1,2) is 0 → skip
maxMinutes = max(2, 1) = 2

Pop [1,1,2]
→ (2,1) is fresh → rot it → queue.push([2,1,3])
maxMinutes = max(2, 2) = 2

Pop [2,1,3]
→ (2,2) is fresh → rot it → queue.push([2,2,4])
maxMinutes = max(3, 2) = 3

Pop [2,2,4]
→ all neighbors are either 0 or already rotten
maxMinutes = max(4, 3) = 4

→ BFS finished, check for any remaining fresh oranges:
→ All are rotten or empty

Final Output: 4

Final State: grid = [ [2,2,2], [2,2,0], [0,2,2] ]
*/

var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }
    let maxMinutes = 0;
    while (queue.length) {
        let [x, y, min] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, min + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, min + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, min + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, min + 1]);
        }
        maxMinutes = Math.max(min, maxMinutes);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return maxMinutes;
};