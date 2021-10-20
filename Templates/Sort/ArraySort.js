const numArraySort = function(array) {
    return array.sort( (a, b) => a-b );
}

let x = numArraySort( [3, 2, 6, 4] );

console.log(x);