/**
    K combination of elements in an array

    Order no matter in combination:
      C(n, k) = n! / ((n-k)! * k!)

    Returns all possible k combinations set.
    E.g.
        n > 2
        k = 2
        [..., [1,2], ...]

    https://jamboard.google.com/d/1Jm2rTQ66AgV6WS-Rk2EAfRos9bgmgo2WO1rKy617wcM/viewer?f=14
 */

export function Combination(arr, k) {
  console.log(`(${k}) combination of items in [${arr}] array`);
  let result = [];

  function dfs(node, start){
    
    if(node.length == k) {
      result.push( node );
      return;
    }
    
    for(let i = start; i < arr.length; i++){
      dfs( node.concat(arr[i]), i + 1 );
    }

  }

  dfs( [], 0 );
  
  return result;
}