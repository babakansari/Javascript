import { memoize } from './Memoizer.js';
// --- Directions
// Print out the n-th entry in the fibonacci series.
// For example:
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

  function slowFib(n) {
    if (n < 2) {
      return n;
    }
  
    return fib(n - 1) + fib(n - 2);
  }
  
  const fib = memoize(slowFib);

  console.log(fib(6));
  
  // Array solution 
  // function fib(n) {
  //   const result = [0, 1];
  //
  //   for (let i = 2; i <= n; i++) {
  //     const a = result[i - 1];
  //     const b = result[i - 2];
  //
  //     result.push(a + b);
  //   }
  //
  //   return result[n];
  // }
  