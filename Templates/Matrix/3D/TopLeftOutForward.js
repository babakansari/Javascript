// Simple ES6 traverse forward 3D array using ES6 for loops

function TraverseTopLeftOutForward(array){
    let result = [];
    for(const depth of array){
        for(const row of depth){
            for(const cell of row){
                result.push(cell);
            }
        }
    }
    return result;
}

const arr1 = [ 
                [ 
                  [111, 112, 113], 
                  [121, 122, 123], 
                  [131, 132, 133] 
                ], 
                [ 
                  [211, 212, 213], 
                  [221, 222, 223], 
                  [231, 232, 233]
                 ]
            ];

console.dir( `Traverse top left out forward: ${TraverseTopLeftOutForward(arr1)}` );
