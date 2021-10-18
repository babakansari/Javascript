// Simple ES6 traverse backward 1D array

function TraverseBackward(array){
    let result = [];
    for(let i=array.length-1; i>=0; i--){
        result.push(array[i]);
    }
    return result;
}

const arr1 = [1,2,3,4,5,6];

console.dir( `Traverse backward; ${TraverseBackward(arr1)}` );

