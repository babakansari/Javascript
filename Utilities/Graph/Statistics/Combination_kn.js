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

function Combinations(arr, k) {
    let result = [];

    function CombinationSum(node, start, level){
      
      if(level == k){
        result.push( node );
        return;
      }
      
      for(let i = start; i < arr.length; i++){
        CombinationSum( node.concat(arr[i]), i+1, level+1 );
      }

    }

    CombinationSum( [], 0, 0 );
    
    return result;
  }


//  Result
//     1,2,3
//     1,2,4
//     1,2,5
//     1,3,4
//     1,3,5
//     1,4,5
//     2,3,4
//     2,3,5
//     2,4,5
//     3,4,5
const nums = [1, 2, 3, 4, 5];
const k = 3;

const result = Combinations( nums, k );
for(const item of result){
    console.log(item.toString());
}
  
  