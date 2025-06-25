// Problem Description
// You are given a 2D matrix A of integers.
// Your task is to compute the sum of elements in each row and
// return a 1D array where each element represents the sum of a corresponding row in the matrix.

export function rowSum(A) {
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = 0; j < A[i].length; j++) {
      sum += Number(A[i][j]);
    }
    ans.push(sum);
  }
  return ans;
}
