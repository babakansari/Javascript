function QuickSort(arr, comparer = (a, b) => b-a){

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    
    // Find the index position of the pivot.
    // Loop on the array and check if pivot in the start index
    // does make sense, then check the next value.
    // Once the value on the current index is smaller than the pivot,
    // that means pivot is bigger so pivot index would be before it.
    // So, position of the current should be swapped with the original pivot index
    // and pivot index is after that.
    function FindPivotIndex(left, right){   
        let pivotIndex = left;
        let pivotValue = arr[right];

        for (let i = left; i < right; i++) {
          if( comparer(arr[i], pivotValue)>0 ) {
            swap( i, pivotIndex );
            pivotIndex++;
          }
        }
        swap( pivotIndex, right );
        return pivotIndex;
    }

    function Sort(left, right){

        if(left >= right){
            return ;
        }

        let pivotIndex = FindPivotIndex( left, right );

        Sort(left, pivotIndex-1);
        Sort(pivotIndex+1, right);
    }

    if (arr.length <= 1) {
        return array;
    }

    Sort (0, arr.length-1);
    return arr;
}
let arr = [33,11,22, 44];

console.log( QuickSort(arr) );