const floodFill = function(matrix, sr, sc, newValue) {
    fill(matrix, sr, sc, matrix[sr][sc], newValue);
    return matrix;
};

var fill = (matrix, x, y, oldValue, newValue) => {
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[x].length ||
       matrix[x][y] === newValue || matrix[x][y] !== oldValue) 
    {
        return;
    }
    matrix[x][y] = newValue;
    fill(matrix, x + 1, y, oldValue, newValue);
    fill(matrix, x, y + 1, oldValue, newValue);
    fill(matrix, x - 1, y, oldValue, newValue);
    fill(matrix, x, y - 1, oldValue, newValue);
}


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