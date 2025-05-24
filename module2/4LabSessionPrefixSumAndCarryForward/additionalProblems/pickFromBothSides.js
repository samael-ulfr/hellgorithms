// You are given an integer array A of size N.
// You have to perform B operations. In one operation,
// you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the B elements that were removed after the B operations.
// NOTE: Suppose B = 3, and array A contains 10 elements, then you can:
// Remove 3 elements from front and 0 elements from the back, OR
// Remove 2 elements from front and 1 element from the back, OR
// Remove 1 element from front and 2 elements from the back, OR
// Remove 0 elements from front and 3 elements from the back.

function pick(A, B) {
  let prefixSum = [];
  prefixSum[0] = 0;

  for (let i = 0; i < A.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + A[i];
  }

  let suffixSum = [];
  suffixSum[A.length] = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + A[i];
  }

  let maxSum = -Infinity;
  for (let i = 0; i <= B; i++) {
    const total = prefixSum[i] + suffixSum[A.length - (B - i)];
    maxSum = Math.max(maxSum, total);
  }
  return maxSum;
}
