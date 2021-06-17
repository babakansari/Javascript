import { deserialize } from './DeserializeArray.js';
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

    
    // InOrder( node, res ){
    //     const Recursions = Object.freeze({
    //         NONE:       0,
    //         FIRST_RECURSION:    1,
    //         SECOND_RECURSION:    2
    //     });
    //     let stack = [];
    //     let recurse = Recursions.FIRST_RECURSION;
    //     while( true ){
    //         if(node == null && stack.length == 0){
    //             break;
    //         }
    //         if (node == null) {
    //             node = stack.pop();
    //             res.push(node.val); // In Order
    //             recurse = Recursions.SECOND_RECURSION;
    //         } else {
    //             stack.push(node);
    //             // res.push(node.val); // Pre Order
    //             recurse = Recursions.FIRST_RECURSION;
    //         }
    //         node = (recurse == Recursions.FIRST_RECURSION) ? node.left : node.right;
    //     }
    // }

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

//          1
//        /
//      2   
//    /     
//   3   
//const root = deserialize( [1,2,null,3] );

let iterator = new Iterator(root);
// iterator.InOrderRecursive(root, iterator.res);
 
iterator.InOrder(root, iterator.res);
// iterator.PreOrder(root, iterator.res);
// terator.PostOrder(root, iterator.res);



for(let item of iterator.res){
    console.log(item.toString());
}