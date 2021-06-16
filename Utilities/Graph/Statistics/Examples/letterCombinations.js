/**
 * N permutaion of elements in two or more arrays:
 *  
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) {
        return [];
    }
    
    const res = [];
    const mapping = getNumberLetterMap();
    dfs([], 0);

    function dfs(curList, index) {
        if (index === digits.length) {
            res.push(curList.join(""));
            return;
        }
        
        const curDigit = digits.charAt(index);
        for (var letter of mapping.get(curDigit)) { 
            dfs(curList.concat(letter), index + 1);
        }
    }   

    function getNumberLetterMap() {
        const map = [
            ['2', "abc"], 
            ['3', "def"], 
            ['4', "ghi"], 
            ['5', "jkl"], 
            ['6', "mno"], 
            ['7', "pqrs"], 
            ['8', "tuv"], 
            ['9', "wxyz"]];
        return new Map(map);
    }

    return res;
};


/**
 *  P(3, 2) * P(2, 2) = 6 * 1 = 6
 */

let digits = "23"
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log( letterCombinations(digits).toString() );