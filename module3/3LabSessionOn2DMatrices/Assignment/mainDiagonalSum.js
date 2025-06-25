// You are given a N X N integer matrix. You have to find the sum of all the main diagonal elements of A.

// Main diagonal of a matrix A is a collection of elements A[i, j] such that i = j.

export function mainDiagonalSum(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i][i];
  }
  return sum;
}
