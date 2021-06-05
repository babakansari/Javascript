/**
Subsets - LeetCode 78
 */
var subsets = function(nums) {
    let result = [];
    nums = nums.sort((a,b)=>a-b);
    dfs([], 0);

    function GetLeftNode(node, index){
        return  node.concat(nums[index]);
    }
    
    function GetRightNode( node ){
        return  node;
    }

    function AreEqual(node1, node2){

        if(!node1 || !node2){
            return false;
        }

        if(node1.length != node2.length){
            return false;
        }

        for(let i=0; i< node1.length; i++){
            if(node1[i] != node2[i]){
                return false;
            }
        }

        return true;
    }

    function dfs(node, index){
        if(node == null){
            return;
        }
        if(AreEqual(result[result.length-1], node)){
            return;
        }
    
        if(index == nums.length){
            
            result.push(node);
            return;
        }
        const leftNode = GetLeftNode(node, index);
        dfs( leftNode, index+1 );


        const rightNode = GetRightNode(node, index);
        dfs( rightNode, index+1 );
    }
    
    return result; 
};

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]

// Input: nums =  [1,2,2]
// Output: [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// Input
// [1,1,2,2]
// Output
// [[1,1,2,2],[1,1,2],[1,1],[1,2,2],[1,2],[1],[1,2,2],[1,2],[1],[2,2],[2],[]]
// Expected
// [[],[1],[1,1],[1,1,2],[1,1,2,2],[1,2],[1,2,2],[2],[2,2]]


const nums = [1, 1, 2, 2];
const result = subsets(nums);
for(const item of result){
    console.log(item.toString());
}


console.log();