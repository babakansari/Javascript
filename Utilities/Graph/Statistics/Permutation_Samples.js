import { Permutation } from './Permutation.js';
import { Print_Permutaions } from './Visualizations.js';
/**
    Permutations - LeetCode 46

    Order matter in permutaion.
        P(n, n) = n!/(n-n)! = n!
        
    Returns all possible permutations.

    E.g.
        n = 3
        [..., [1,2,3], [3,2,1], ...]

    https://jamboard.google.com/d/1Jm2rTQ66AgV6WS-Rk2EAfRos9bgmgo2WO1rKy617wcM/viewer?f=12
 */

// Input: nums = [1,2,3]
// k = 3
// Output: 
//         1,2,3
//         1,3,2
//         2,1,3
//         2,3,1
//         3,1,2
//         3,2,1
let nums = [1,2,3];
let k = nums.length
let result = Permutation (nums, k);
Print_Permutaions (result);

// Input: nums = [1,2,3,4]
// k = 2
// Output: 
//         1,2
//         1,3
//         1,4
//         2,1
//         2,3
//         2,4
//         3,1
//         3,2
//         3,4
//         4,1
//         4,2
//         4,3

nums = [1, 2, 3];
k = 2;
result = Permutation (nums, k);
Print_Permutaions (result);

// Input: nums = [1,2,3]
// k = 2
// Output: 
//         1,2
//         1,3
//         2,1
//         2,3
//         2,4
//         3,1
//         3,2

nums = [1, 2, 3];
k = 2;
result = Permutation (nums, k);
Print_Permutaions (result);
