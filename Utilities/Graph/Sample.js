import { GraphTraverser } from './GraphTraverser.js';

// Tree data structure
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 TreeNode.prototype.toString = function() { 
     if(!this){
         return '(NULL)';
     }
     if(this.left == null && this.right == null) {
         return `(${this.val})` ;
     }
     if(this.left == null) {
         return `(${this.val}) -> ${this.right.val}` ;
     }
     if(this.right == null) {
         return `${this.left.val} <- (${this.val})` ;
     }
     return `${this.left.val} <- (${this.val}) -> ${this.right.val}` ;
 }

 Array.prototype.add_child = function(node, child) { 
    if(child) {
        child.level = node.level + 1;
        this.push(child);
    }
}; 

// Use Graph Traverser methods to traverse the tree in ZigZag order 
var zigzagLevelOrder = function(root) {
    
    const result = [];
    const graphTraverser = new GraphTraverser();
    graphTraverser.bfs(root, (node) =>{
            let children = [];
            if(node.left){
                children.push(node.left);
            }
            if(node.right){
                children.push(node.right);
            }
            return children;
        },
        (node, level) => {
            let value = node.val;
            console.log( `Level[${level}] = ${value}` );
            
            if(result[level]) {
                if(level % 2){
                    result[level].unshift(value);
                } else {
                    result[level].push(value);
                }
                
            } else {
                result[level] = [value];
            }
        }
    );
    
    return result;
};

// Example of the usage given the following tree structure
//         1
//    /        \
//   11         12
//  /   \       /  \
// 111  112   121   122
// [ [ 1 ], [ 11, 12 ], [ 111, 112, 121, 122 ] ]
let n111 = new TreeNode(111);
let n112 = new TreeNode(112);
let n121 = new TreeNode(121);
let n122 = new TreeNode(122);
let n11 = new TreeNode(11, n111, n112);
let n12 = new TreeNode(12, n121, n122);
let n1 = new TreeNode(1, n11, n12);


console.log( zigzagLevelOrder( n1 ).toString() );