//Objective is to find the perimeter of an island.

let grid = 
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]


//O(n^2) solution that checks each element. If we pass a 1, we add 4 to
//the result and check the left and upper elements. If they are 1's as well,
//we subtract 2 from the result due to lost perimeter.

let result = 0

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 1) {
            result += 4

            if (i > 0 && grid[i - 1][j] == 1) {
                result -= 2
            }

            if (j > 0 && grid[i][j - 1] == 1) {
                result -=2
            } 
        }
    }
}

return result