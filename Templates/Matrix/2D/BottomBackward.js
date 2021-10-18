// Simple ES6 traverse backward 2D array

function TraverseBottomBackward(array){
    const result = [];
    const rows = array.length-1;
    const cols = array[0].length-1;

    for(let r=rows; r>=0; r--){
        for(let c=cols; c>=0; c--){
            result.push(array[r][c]);
        }
        
    }

    return result;
}

const arr1 = [ [11,12,13], [21,22,23] ];

console.dir( `Traverse top forward: ${TraverseBottomBackward(arr1)}` );
