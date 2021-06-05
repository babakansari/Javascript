/**
    K permutaion of elements in an array

    Order matter in permutaion.
        P(n, k) = n!/(n-k)!

    Returns all possible k combinations array. 
    E.g.
        n > 2
        k = 2
        [..., [1,2], [2,1], ...]
 */
export function Permutation(nums, k) {
    console.log(`(${k}) permuation of items in [${nums}] array`);
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
