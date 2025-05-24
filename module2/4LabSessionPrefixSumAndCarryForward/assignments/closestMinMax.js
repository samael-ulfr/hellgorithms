// Given an array A, find the size of the smallest subarray such that it contains
// at least one occurrence of the maximum value of the array
// and at least one occurrence of the minimum value of the array.

function closestMinMax(A) {
  let min = Infinity,
    max = -Infinity;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < min) min = A[i];

    if (A[i] > max) max = A[i];
  }

  let minIdx = -1,
    maxIdx = -1;
  let ans = A.length;
  if (min === max) return 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === min) {
      if (maxIdx !== -1) {
        ans = Math.min(ans, i - maxIdx + 1);
      }
      minIdx = i;
    } else if (A[i] === max) {
      if (minIdx !== -1) {
        ans = Math.min(ans, i - minIdx + 1);
      }
      maxIdx = i;
    }
  }

  return ans;
}
