// Given an array A of N integers. Construct prefix sum of the array in the given array itself.

function inPlacePrefixSum(A) {
  for (let i = 1; i < A.length; i++) {
    A[i] = A[i - 1] + A[i];
  }
  return A;
}
