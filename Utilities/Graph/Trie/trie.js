/**
    Trie

    https://jamboard.google.com/d/15sBm8_vHYkAb13UoexTgUVryI2TR508YYZn7oIv29o8/viewer?f=0
 */

class Node {

    constructor(ch = null){
        this.ch = ch;
        this.total = 0;
        this.end = false;
        this.children = new Map();
        this._electedChild = null;
    }

    getElectedChild(){
        return this._electedChild;
    }

    addChild(key){
        let node = this.getChild(key);
        if( node == undefined ){
            node = new Node(key);
            this.children.set(key, node);
        } 
        node.total++;
        if(this._electedChild == null ||node.total>=this._electedChild.total){
            this._electedChild = node;
        }
        return node;
    }

    getChild(key){
        return this.children.get(key);
    }
}

export class Trie {

    constructor() {
        this.root = new Node();
    }

    insert(word){
        let current =  this.root;
        for(const c of word){
            let child = current.addChild(c);
            current = child;
        }
        current.end = true;
    }

    getCommonPrefix(totalRepeat){
        let result = "";
        let electedChild =  this.root.getElectedChild();
        while( electedChild!=null ){
            if(electedChild.total >totalRepeat){
                result += electedChild.ch;
            }
            
            electedChild = electedChild.getElectedChild();
        }
        return result;
    }

    findNode(query){
        let current = this.root;
        for(const c of query){
            let child = current.getChild(c);
            current = child;
        }
        return current;
    }

    startsFrom(root, word = ""){
        let result = [];
        dfs(root);

        function dfs(node){
            if(node.end){
                result.push(word);
                return;
            }
            for(const [key, child] of node.children){
                word += child.ch;
                dfs(child);
                word = word.slice(0, -1); 
            }
        }
        return result;
    }

    startsWith(query){
        const node = this.findNode(query);
        return this.startsFrom(node, query);
    }

    toString(){
        let result = "";
        dfs(this.root);
        return result;

        function dfs(node){
            if(node == null){
                return;
            }

            for(const [id, child] of node.children){
                result += `${id}(${child.total}) `;
                if(child.end){
                    result += "\r\n";
                }
                dfs(child);
            }

        }
        
    }
}

// Example of usage
let t = new Trie();

t.insert("flower");
t.insert("floor");
t.insert("clock");
t.insert("club");
t.insert("fly");
t.insert("fire");
// //console.log( t.toString() );

// console.log( `Common prefix = ${t.getCommonPrefix(2)}` );

//              null
//            /     \
//          b        c
//         /  \       \
//        a    o        l
//       /  \    \       \
//      g     n    x       o
//     /  \    \            \
//    s    g     n           t
//          \     \           \
//           a     e           h
//            \     \           \
//             g     r           s
//              \
//               e
t.insert("bags");
t.insert("baggage");
t.insert("banner");
t.insert("box");
t.insert("cloths");
t.insert("bags");

console.log( t.startsWith("bag") );


