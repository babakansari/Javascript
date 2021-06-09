import { Combination } from './Combination.js';
import { Print_Permutaions } from './Visualizations.js';

// Input: nums = [1,2,3,4,5]
// k = 3
// Result
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
let nums = [1, 2, 3, 4, 5];
let k = 3;
let result = Combination( nums, k );
Print_Permutaions (result);

// Input: nums = [1,2,3]
// k = 2
// Result
//     1,2
//     1,3
//     2,3  
nums = [1, 2, 3];
k = 2;
result = Combination( nums, k );
Print_Permutaions (result);
