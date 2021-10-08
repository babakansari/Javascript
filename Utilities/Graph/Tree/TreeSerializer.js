import { TreeNode } from './TreeNode.js';

// Deserialize the arrays in LeetCode questions into Binary Tree

export function deserialize(data) {

    function CreateTreeNode(data){
        if(data.length <= 0){
            return null;
        }
        let val = data.shift();
        if(val === null){
            return null;
        }

        return new TreeNode(val);
    }

    if (data.length === 0) {
        return null;
    }
    
    const root = CreateTreeNode(data);
    const q = [root];
    
    while (q.length > 0) {
        const node = q.shift();
        if (node === null) {
            continue;
        }
        
        let leftNode = CreateTreeNode(data);
        if(leftNode!==null){
            node.left = leftNode;
            q.push(leftNode);
        }

        let rightNode = CreateTreeNode(data);
        if(rightNode!==null){
            node.right = rightNode;
            q.push(rightNode);
        }
    }
    
    return root;
};


export function serialize(root) {
    let queue = [root], ret = [];
    while(queue.length){
        let node = queue.shift();

        if(node==null){
            ret.push(null);
            continue;
        }

        ret.push(node.val);

        queue.push(node.left !== null ? node.left : null);
        queue.push(node.right !== null ? node.right : null);
    }
    
    return ret;
};
