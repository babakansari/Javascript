const floodFill = function(matrix, sr, sc, newValue) {

    const _isInArea = (x, y, matrix, newValue, oldValue) => {
        return x < 0 || y < 0 || x >= matrix.length || y >= matrix[x].length ||
            matrix[x][y] === newValue || matrix[x][y] !== oldValue;
    }

    const dfs = (matrix, x, y, oldValue, newValue) => {
        if (_isInArea(x, y, matrix, newValue, oldValue)){
            return;
        }
        matrix[x][y] = newValue-1;
        dfs(matrix, x + 1, y, oldValue, newValue);
        dfs(matrix, x, y + 1, oldValue, newValue);
        dfs(matrix, x - 1, y, oldValue, newValue);
        dfs(matrix, x, y - 1, oldValue, newValue);
    }

    const bfs = (matrix, i, j, oldValue, newValue) => {
        function enqueue(x, y){
            if (_isInArea(x, y, matrix, newValue, oldValue)){
                return;
            }
            queue.push({x, y});
        }

        const queue = [];
        enqueue(i, j)

        while(queue.length){

            const cell = queue.shift();
            const row = cell.x;
            const col = cell.y;
            matrix[row][col] = newValue;

            enqueue( row+1, col );
            enqueue( row-1, col );
            enqueue( row,   col+1 );
            enqueue( row,   col-1 );
        }
    }

    // dfs(matrix, sr, sc, matrix[sr][sc], newValue);
    bfs(matrix, sr, sc, matrix[sr][sc], newValue);
    return matrix;
};



// Example
const arr1 = [  
                [1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 1, 1], 
                [1, 0, 0, 0, 1, 1], 
                [1, 0, 0, 0, 0, 1], 
                [1, 1, 0, 0, 1, 1], 
                [1, 1, 1, 1, 1, 0], 
            ];

console.table(arr1);

floodFill( arr1, 2, 2 , 9);

console.table(arr1);


