/**
    K Combinations of array
 */
var Combine = function(nums, k) {
    let result = [];
    let visited = new Array(nums.length).fill(false);
    let permute = [];
    dfs();

    function dfs( ){

        if(permute.length == k){
            result.push([...permute]);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(visited[i]){
                continue;
            }
            visited[i] = true;
            permute.push(nums[i]);
            dfs( );
            permute.pop();
            visited[i] = false;
        }

    }
    
    return result; 
};


const nums = [1,2,3];
const k = 2;

const result = Combine  (nums, k);
for(const item of result){
    console.log(item.toString());
}


console.log();