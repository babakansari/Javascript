# Javascript

Javascript liberary for:

- Graph traversing
    Sample usage could be found in the `Sample.js` file
    
```text
  This class provides generic Breadth First and Depth First graph traversing methods

  Starts from a given `root` first node
  The child nodes are defined using get_children callback function for a given node
  On_visit callback function could be used to process the nodes in specific level

Example:

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
