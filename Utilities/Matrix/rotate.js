
// Example 1:
//  Input: matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]]

//  Output: [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Example 3:
// Input: matrix = [[1]]
// Output: [[1]]

// Example 4:
// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]


var swap = function(matrix, from_x, from_y, to_x, to_y) {
    let temp = matrix[from_x][from_y];
    matrix[from_x][from_y] = matrix[to_x][to_y];
    matrix[to_x][to_y] = temp;
}


var rotate = function(matrix) {
    let n = matrix.length-1;
    for (let i = 0; i < n; i ++) {
      for (let j = i; j < n-i; j++) {
          swap(matrix, i, j, j, n-i);
          swap(matrix, i, j, n-i, n-j);
          swap(matrix, i, j, n-j, i);
      }
    }
};

let matrix = [
    ['a','b','c','d'],  // 'b'->'h': (0,1) -> (1,3) = (1  , 3-0)
    ['e','f','g','h'],  // 'h'->'p': (0,1) -> (3,2) = (3-0, 3-1)
    ['i','j','k','l'],  // 'p'->'i': (0,1) -> (3,0) = (3-0, 0)
    ['m','n','p','q']];
for(const r of matrix){
    console.log( r.toString() );
}
console.log('------');
rotate( matrix );

for(const r of matrix){
    console.log( r.toString() );
}