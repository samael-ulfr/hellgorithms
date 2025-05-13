// Given an integer array A of size N. In one second, you can increase the value of one element by 1.
// Find the minimum time in seconds to make all elements of the array equal.

function timeToEquality(A) {
    let largest = -Infinity;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] > largest) {
        largest = A[i];
      }
    }
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      count = count + (largest - A[i]);
    }
  
    return count;
  }
  
