/**
 * 
 */
var combinationSum3 = function(k, n) {
    const result = [];

    function sum(arr){
        let total = 0;
        for(const i of arr){
            total += i;
        }
        return total;
    }

    const dfs = (currArr, start) => {
        if (currArr.length === k) 
        {
            if( sum(currArr) == n){
                result.push(currArr);
            }
            return;
        }
        
        for (let i = start; i <= 9; i++) {
            dfs(currArr.concat(i), i + 1);
        }
    };

     dfs([], 1);
     
     return result; 
 };

let k = 2;
let n = 9;
//  Output: 
//         1,8
//         2,7
//         3,6
//         4,5
let result = combinationSum3(k, n);
for(const c of result){
    console.log( c.toString() );
}