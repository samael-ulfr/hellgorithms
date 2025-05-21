// You are given an array A of length N and Q queries given by the 2D array B of size Q×2.
// Each query consists of two integers B[i][0] and B[i][1].
// For every query, your task is to find the count of even numbers in the range
// from A[B[i][0]] to A[B[i][1]].

function countEvenNumbersInRange(A, B) {
  const prefixSum = [];
  prefixSum[0] = A[0] % 2 === 0 ? 1 : 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      prefixSum[i] = prefixSum[i - 1] + 1;
    } else prefixSum[i] = prefixSum[i - 1];
  }

  const result = [];
  for (let i = 0; i < B.length; i++) {
    start = B[i][0];
    end = B[i][1];

    if (start === 0) {
      result.push(prefixSum[end]);
    } else {
      result.push(prefixSum[end] - prefixSum[start - 1]);
    }
  }
  return result;
}
