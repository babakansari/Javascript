
class NodeInfo{
    constructor(id, inDegree, children){
        this.id = id;
        this.inDegree = inDegree;
        this.children = children;
    }
}

const getNodeInfo = function(graph, key){
    if(graph.has(key)){
        return graph.get(key);
    }
    const nodeInfo = new NodeInfo(key, 0, []);
    graph.set(key, nodeInfo);
    return nodeInfo;
}

const canFinishWithAdj = function(n, prerequisites) {
  const graph = new Map();

  // Construct the Graph adjacent map
  for(let i = 0; i < prerequisites.length; i++) {
    const fromNode = prerequisites[i][1];
    const toNode = prerequisites[i][0];
    const fromNodeInfo = getNodeInfo(graph, fromNode);
    const toNodeInfo = getNodeInfo(graph, toNode);
    fromNodeInfo.children.push(toNode);
    toNodeInfo.inDegree++;
  }
  
  // Find the firt node that has no inDegree
  const stack = [];
  for(let [node, nodeInfo] of graph) {
    if(nodeInfo.inDegree === 0) {
      stack.push(nodeInfo);
    }
  }

  // Traverse graph 
  let count = 0;
  while(stack.length) {
    const currentNode = stack.pop();
    console.log(currentNode.id);
    count++;

    // Traverse children to adjust inDegree
    for(let child of currentNode.children) {
      const childNodeInfo = graph.get(child);
      childNodeInfo.inDegree--;
      if(childNodeInfo.inDegree === 0) {
        stack.push(childNodeInfo);
      }
    }
    
  }
  
  return count === n;
};


// const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
// const p = [[1, 0], [2, 1], [5, 2], [0, 3], [4, 3], [3, 5], [4, 5]]
// const p = [[1,3], [2, 1]]
const p = [[1,3], [2, 1], [2, 3]]
// const p = [[1,3], [2, 1], [3, 2]]


const result = canFinishWithAdj(p.length, p);

console.log(result);