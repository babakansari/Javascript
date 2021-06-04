/**
    Permutations - LeetCode 46

    Returns all possible permutations.
    E.g.
        n = 3
        [..., [1,2,3], [3,2,1], ...]

    https://jamboard.google.com/d/1Jm2rTQ66AgV6WS-Rk2EAfRos9bgmgo2WO1rKy617wcM/viewer?f=12
 */
var Permutation = function(nums) {
        let result = [];
        let visited = new Array(nums.length).fill(false);
        let permute = [];
        dfs();

        function dfs( ){

            if(permute.length == nums.length){
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

// Input: nums = [1,2,3]
// Output: 
//         1,2,3
//         1,3,2
//         2,1,3
//         2,3,1
//         3,1,2
//         3,2,1

// Input: nums = [0]
// Output: [[],[0]]

const nums = [1,2,3];
const result = Permutation  (nums);
for(const item of result){
    console.log(item.toString());
}


console.log();