import { deserialize, serialize } from './TreeSerializer.js';
/**
 *  Recursive and none recursive tree traversals
 */

class Iterator{

    constructor(root){
        this.root = root;
        this.res = [];
    }

    InOrderRecursive(node) {
        if(node == null)
            return;
        
        this.InOrderRecursive(node.left);
        this.res.push(node.val);
        this.InOrderRecursive(node.right);
    };

    *trace(node, onMoveLeft = () =>{} , onMoveRight = () =>{} ) {
        yield node;
        let left = onMoveLeft (node);
        let right = onMoveRight (node);
        left ? yield *this.trace(left, onMoveLeft, onMoveRight) : yield null;
        right ? yield *this.trace(right, onMoveLeft, onMoveRight) : yield null;
    }

    InOrder( node, res ){
        let stack = [];
        while( true ){

            if(node == null && stack.length == 0){
                break;
            }

            if (node == null) {
                node = stack.pop();

                res.push(node.val);
                node = node.right;
                continue;
            }
            
            stack.push(node);
            node = node.left;
        }
    }

    PreOrder( node, res ){
        let stack = [];
        while( true ){

            if(node == null && stack.length == 0){
                break;
            }

            if (node == null){
                node = stack.pop();
                node = node.right;
                continue;
            }

            stack.push(node);
            res.push(node.val);
            node = node.left;
        }
    }

    PostOrder( node, res ){
        let stack = [];
        while( true ){

            if(node == null && stack.length == 0){
                break;
            }

            if (node == null) {
                node = stack.pop();
                node = node.left;
                continue;
            }

            res.unshift(node.val);

            stack.push(node);
            node = node.right;
        }
    }

}

//            3
//        /      \
//      5         1
//    /   \      / \
//   6     2    0   8
//        /  \
//       7    4
const root = deserialize([3,5,1,6,2,0,8,null,null,7,4]);

const array = serialize(root);
console.log(`Array = ${array.toString()}`);
//          1
//        /
//      2   
//    /     
//   3   
//const root = deserialize( [1,2,null,3] );

let iterator = new Iterator(root);
// iterator.InOrderRecursive(root, iterator.res);
 
console.log( "Pre-order non recursive" );
// iterator.InOrder(root, iterator.res);
iterator.PreOrder(root, iterator.res);
// iterator.PostOrder(root, iterator.res);

for(let item of iterator.res){
    console.log(item.toString());
}

console.log( "Pre-order recursive" );
const tree  = iterator.trace( iterator.root, (node) => node && node.left, 
                                            (node) =>  node && node.right);

for(const node of tree){
    if(node){
        console.log(node.val);
    }
}