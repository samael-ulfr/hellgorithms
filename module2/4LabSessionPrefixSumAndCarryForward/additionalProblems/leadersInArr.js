// Given an integer array A containing N distinct integers,
// you have to find all the leaders in array A.
// An element is a leader if it is strictly greater than all the elements to its right side.
// NOTE: The rightmost element is always a leader.

function leaderInArr(A) {
  let maxSoFar = -Infinity;
  let res = [];
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] > maxSoFar) {
      maxSoFar = A[i];
      res.push(maxSoFar);
    }
  }
  return res;
}

function leaderInArrBruteForce(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    let isgrater = true;
    for (let j = i + 1; j < A.length; j++) {
      if (element <= A[j]) {
        isgrater = false;
        break;
      }
      isgrater = true;
    }
    if (isgrater) {
      result.push(A[i]);
    }
  }
  return result;
}
