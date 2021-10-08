/**
    Subsets - LeetCode 78

    Returns all possible subsets.
    E.g.
        n = 3 => n!
        [..., [1,2,3], [2,3], ...]

    https://jamboard.google.com/d/1Jm2rTQ66AgV6WS-Rk2EAfRos9bgmgo2WO1rKy617wcM/viewer?f=10
 */
var subsets = function(nums) {
    let result = [];
    dfs([], 0);

    function GetLeftNode(node, index){
        return  node.concat(nums[index]);
    }    
    
    function GetRightNode( node ){
        return  node;
    }

    function dfs(node, index){
        if(node == null){
            return;
        }
        
        if(index == nums.length){
            result.push(  node  );
            return;
        }

        const leftNode = GetLeftNode(node, index);
        dfs( leftNode, index+1 );

        const rightNode = GetRightNode(node);
        dfs( rightNode, index+1 );
    }
    
    return result; 
};

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]

const nums = [1,2,3];
const result = subsets(nums);
for(const item of result){
    console.log(item.toString());
}
