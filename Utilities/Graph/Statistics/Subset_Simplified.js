/**
    Subsets - LeetCode 78

    Returns all possible subsets.
    E.g.
        n = 3
        [..., [1,2,3], [2,3], ...]

    https://jamboard.google.com/d/1Jm2rTQ66AgV6WS-Rk2EAfRos9bgmgo2WO1rKy617wcM/viewer?f=11
 */
var subsets = function(nums) {
    let result = [];
    dfs([], 0);

    function dfs(node, level){
        if(node == null){
            return;
        }
            
        if(level == nums.length){
            result.push(  node  );
            return;
        }

        const leftNode = node.concat(nums[level]);
        dfs( leftNode, level+1 );

        dfs( node, level+1 );
    }
    
    return result; 
};

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]

const nums = ['a','b','c'];
const result = subsets(nums);
for(const item of result){
    console.log(item.toString());
}
