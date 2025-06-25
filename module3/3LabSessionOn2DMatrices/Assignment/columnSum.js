// Problem Description

// You are given a 2D integer matrix A,
// return a 1D integer array containing column-wise sums of original matrix.

export function columnSum(A) {
  let ans = [];
  for (let j = 0; j < A[0].length; j++) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += A[i][j];
    }
    ans.push(sum);
  }
  return ans;
}
