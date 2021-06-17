
// const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]; // No negative loop
// const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5], [3, 2, 1]];
const t = [[2,1,1],[2,3,1],[3,4,1]];

const findShortestpath = function(times, N, k) {

  function adjustWeights(distances){
    let counter = 0;
    for(const [source, destination, weight] of times){
        const moveCost = distances[source-1]+weight;
        if(moveCost < distances[destination-1]){
            distances[destination-1] = moveCost;
            counter++;
        }
    }
    return counter !== 0;
  }

  const distances = new Array(N).fill(Infinity);
  distances[k-1] = 0;
  
  for(let i=0; i<N-1; i++){
    if(!adjustWeights(distances)){
        continue;
    }
  }

  if(adjustWeights(distances)){
    return Infinity;
  }

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

// console.log(networkDelayTime(t, 5, 1)); // No negative loop
console.log(findShortestpath(t, 4, 2));