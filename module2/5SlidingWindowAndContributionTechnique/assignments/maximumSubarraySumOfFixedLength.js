// Given an array A of length N,
// Find the maximum subarray sum out of all possible subarray of length B.

function maximumSubarraySumOfFixedLength(A, B) {
  initSum = 0;
  i = 0;
  j = B - 1;
  for (let index = 0; index < B; index++) {
    initSum += A[index];
  }
  i++;
  j++;
  let maxSUm = initSum;

  while (j < A.length) {
    initSum = initSum + A[j] - A[i - 1];
    maxSUm = Math.max(maxSUm, initSum);
    i++;
    j++;
  }

  return maxSUm;
}
