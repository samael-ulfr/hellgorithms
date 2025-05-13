// Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
// Check if any good pair exist or not.

function goodPairs(arr, B) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === B) {
          return 1;
        }
      }
    }
    return 0;
  }
  