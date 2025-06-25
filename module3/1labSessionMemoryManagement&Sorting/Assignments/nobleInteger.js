// Given an integer array A, find if an integer p exists in the array such that
// the number of integers greater than p in the array equals p.

function nobleInteger(A) {
  A.sort((a, b) => a - b);

  let ans = -1;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) continue;
    if (A[i] === A.length - i - 1) {
      ans = 1;
    }
  }

  if (A[A.length - 1] === 0) {
    return 1;
  }

  return ans;
}
