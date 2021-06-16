import { GraphTraverser } from './GraphTraverser.js';
import { TreeNode } from './Tree/TreeNode.js';
import { deserialize } from './Tree/DeserializeArray.js';

//------- Use Graph Traverser methods to traverse the tree in ZigZag order 
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

//console.log( zigzagLevelOrder( n1 ).toString() );

//------- Use Deserializer to create a Binary Tree from a Leet Code array
var visualizeBinaryTree = function(root){
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
            console.log( `Level[${level}] = ${node}` );
        }
    );

}

//----------- Deserialize array presentation of the tree --------
//-------------- and visualize the tree using BFS ---------------
//              1
//          /       \
//        2           3
//      /   \           \
//     7      5           4
let arr ;
arr =  [1,2,3,7,5,null,4];
// arr = [1,2,3,null,null,4,5];
let root = deserialize(arr);
console.log(`root = ${root.toString()}`);
visualizeBinaryTree(root);
