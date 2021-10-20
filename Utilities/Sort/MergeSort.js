function MergeSort(arr) {


    function merge(left, right) {
        const results = [];
      
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            results.push(left.shift());
          } else {
            results.push(right.shift());
          }
        }
      
        return [...results, ...left, ...right];
    }

    if (arr.length === 1) {
      return arr;
    }
  
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    return merge(MergeSort(left), MergeSort(right));
}
  
let arr = [33,11,22, 44];

console.log( MergeSort(arr) );