import { Trie } from './Trie/trie.js';

var longestCommonPrefix = function(strs) {
    const trie = new Trie();

    // Add words to trie data structure
    for(const str of strs){
        trie.insert(str);
    }

    return trie.getCommonPrefix(strs.length-1);
};

let strs = ["flower","flow","flight", "fight"];
//let strs = ["flower", "floor", "clock", "club", "fly", "fire"];

let result = longestCommonPrefix(strs);

console.log(`Result = ${result}`);