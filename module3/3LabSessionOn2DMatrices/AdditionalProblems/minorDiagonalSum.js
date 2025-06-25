// Problem Description
// You are given a N X N integer matrix. You have to find the sum of all the minor diagonal elements of A.
// Minor diagonal of a M X M matrix A is a collection of elements A[i, j] such that
//  i + j = M + 1 (where i, j are 1-based).

export function minorDiagonalSum(A) {
  const N = A.length;
  let i = 0;
  let j = N - 1;
  let sum = 0;
  while (i < N) {
    sum += A[i][j];
    i++;
    j--;
  }

  return sum;
}
