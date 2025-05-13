// Given an array A of N integers. 
// Count the number of elements that have at least 1 elements greater than itself.

function countOfElements(A) {
    let max = A[0];
  
    for (let i = 1; i < A.length; i++) {
      if (A[i] > max) {
        max = A[i];
      }
    }
    let count = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] < max) {
        count++;
      }
    }
  
    return count;
  }
