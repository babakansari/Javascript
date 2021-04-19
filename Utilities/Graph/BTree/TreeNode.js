/**
 * @param {TreeNode} root
 * @return {number[]}
 */

export function TreeNode(val, left, right) {
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