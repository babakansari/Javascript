// Simple ES6 traverse backward 3D array 

function BottomRightInBackward(array){
    const result = [];
    const depth = array.length-1;
    const rows = array[0].length-1;
    const cols = array[0][0].length-1;

    for(let d=depth; d>=0; d--){
        for(let r=rows; r>=0; r--){
            for(let c=cols; c>=0; c--){
                result.push(array[d][r][c]);
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

console.dir( `Traverse bottom right in Backward: ${BottomRightInBackward(arr1)}` );
