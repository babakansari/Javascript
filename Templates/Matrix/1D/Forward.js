// Simple ES6 traverse forward 1D array using ES6 for loops
//
// Generator function could also be used:
//
// function *TraverseForward(array){
//     for(const item of array){
//         return yield item;
//     }
// }

function TraverseForward(array){
    let result = [];
    for(const item of array){
        result.push(item);
    }
    return result;
}

const arr1 = [1,2,3,4,5,6];

console.dir( `Traverse forward; ${TraverseForward(arr1)}` );
