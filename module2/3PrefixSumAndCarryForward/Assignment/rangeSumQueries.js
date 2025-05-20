// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

function rangeSumQueries(A, B) {
  const preFixArr = [];
  preFixArr[0] = A[0];

  for (let i = 1; i < A.length; i++) {
    preFixArr[i] = preFixArr[i - 1] + A[i];
  }

  const result = [];
  for (let i = 0; i < B.length; i++) {
    let start = B[i][0];
    let end = B[i][1];

    if (start === 0) {
      result.push(preFixArr[end]);
    } else {
      result.push(preFixArr[end] - preFixArr[start - 1]);
    }
  }
  return result;
}
