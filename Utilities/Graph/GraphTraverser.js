
// GraphTraverser
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