/**
 77. Combinations leetcode
 */
var Combine = function(n, k) {
    
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        if(current.length > k) {
            return;
        }
        
        for(let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }
        
    }
    
    dfs([], 1);
    return result;
};


const n = 4;
const k = 2;

const result = Combine  (n, k);
for(const item of result){
    console.log(item.toString());
}
