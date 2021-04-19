# Javascript

Javascript liberary for:

- Graph traversing:

  Sample usage could be found in the `Utilities/Graph/Sample.js` file
    
  This class provides generic Breadth First and Depth First graph traversing methods

  Starts from a given `root` first node.
  The child nodes are defined using get_children callback function for a given node.
  On_visit callback function could be used to process the nodes in specific level.

Example:
```text
  {bfs/dfs}( { Given First Node }, 
       ({ For a given Node }) => {
             { Return the children for the given node }
        },
       ({ The Node }, { In the level }) => {
             { Process the Node in the given level of the graph in Breadth First Order }
        },
       { The level property name added dynamically to the graph nodes }
     );
```

- Deserialize array to Binary Tree

  The arrays defining binary tree in `leedcode` questions could be deserialized into `TreeNode` objects using
  the following `deserialize` in `Utilities/Graph/BTree/DeserializeArray.js`:
  
```javascript
arr =  [1,2,3,null,5,null,4];
let leetCodeTreeNode = deserialize(arr);
```

  Sample usage can be found in `Utilities/Graph/Sample.js`.

- Memoization 

  It memorize a function call with the same parameter values