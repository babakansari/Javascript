/**
    77. Combinations leetcode

    Orders doesn't matter in combination

    Returns k combinations of n. 
    E.g.
        n > 2
        k = 2
        [..., [1,2], ...]
 */
var Combine = function(n, k) {
    
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }

        for(let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }
        
    }
    
    dfs([], 1);
    return result;
};

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


const n = 4;
const k = 2;

const result = Combine  (n, k);
for(const item of result){
    console.log(item.toString());
}
