// Given an array A and an integer B, find the number of occurrences of B in A.

function linearSearchMultipleOccurences(arr, B) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (A[i] === B) {
        count++;
      }
    }
    return count;
  }