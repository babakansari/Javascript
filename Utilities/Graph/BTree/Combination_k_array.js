/**
    K Combinations array

    Returns all possible k combinations array. 
    E.g.
        n > 2
        k = 2
        [..., [1,2], [2,1], ...]
 */
var Combine = function(nums, k) {
    let result = [];
    let visited = new Array(nums.length).fill(false);

    dfs( [] );

    function dfs(permute){

        if(permute.length == k){
            result.push([...permute]);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(visited[i]){
                continue;
            }
            visited[i] = true;
            dfs( permute.concat( nums[i] ) );
            visited[i] = false;
        }

    }
    
    return result; 
};

// Result
//     1,2
//     1,3
//     1,4
//     2,1
//     2,3
//     2,4
//     3,1
//     3,2
//     3,4
//     4,1
//     4,2
//     4,3

const nums = [1, 2, 3, 4];
const k = 2;

const result = Combine  (nums, k);
for(const item of result){
    console.log(item.toString());
}

