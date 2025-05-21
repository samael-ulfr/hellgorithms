// You are given:
// An integer array A representing the array of numbers of size N.
// A 2D array B of size Q,
// where each row B[i] contains two integers B[i][0] and B[i][1], representing the range [L, R].
// For each query in B,
// calculate the sum of elements in A at odd indices within the specified range [L, R]
// and return the results as an array.

function sumOfOddIndexedElementsInRange(A, B) {
  const prefixSum = [];
  prefixSum[0] = 0;
  for (let i = 1; i < A.length; i++) {
    if (i % 2 !== 0) prefixSum[i] = prefixSum[i - 1] + A[i];
    else prefixSum[i] = prefixSum[i - 1];
  }
  console.log(prefixSum);
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
