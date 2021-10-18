// Simple ES6 traverse forward 2D array using ES6 for loops

function TraverseTopForward(array){
    let result = [];
    for(const row of array){
        for(const cell of row){
            result.push(cell);
        }
        
    }
    return result;
}

const arr1 = [ [11,12,13], [21,22,23] ];

console.dir( `Traverse top forward; ${TraverseTopForward(arr1)}` );
