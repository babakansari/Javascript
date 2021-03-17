
// GraphTraverser:
//   This class provides generic Breath First and Depth First graph traversing methods
//
//   Starts from a given `root` first node
//   The child nodes are defined using get_children callback function for a given node
//   On_visit callback function could be used to process the nodes in specific level
//
// Example:
//   {bfs/dfs}( { Given First Node }, 
//        ({ For a given Node }) => {
//              { Return the children for the given node }
//         },
//        ({ The Node }, { In the level }) => {
//              { Process the Node in the given level of the graph in Breadth First Order }
//         },
//        { The level property name added dynamically to the graph nodes }
//      );

export class GraphTraverser
{
    constructor(level_property_name = 'level') {
        this.level_property_name = level_property_name;
      }

    _add_level( node, children ) {
        if(!node[this.level_property_name]) {
            node[this.level_property_name] = 0;
        }
        for(const c of children){
            c[this.level_property_name] =  node[this.level_property_name]+1;
        }
    }

    // Breadth First Traverse
    bfs( root, get_children, on_visit ) {
        let nodesToProcess = [root];
        while (nodesToProcess.length) {
            const node = nodesToProcess.shift();
            
            let children = get_children(node);
            this._add_level( node, children );
            nodesToProcess.push(...children);
            
            on_visit(node, node[this.level_property_name]);
        }
    }

    // Depth First Traverse
    dfs( root, get_children, on_visit ){
        let nodesToProcess = [root];
        while (nodesToProcess.length) {
            const node = nodesToProcess.shift();

            let children = get_children(node);
            this._add_level( node, children );

            nodesToProcess.unshift(...children);
            on_visit(node, node[this.level_property_name]);
        }
    }
}