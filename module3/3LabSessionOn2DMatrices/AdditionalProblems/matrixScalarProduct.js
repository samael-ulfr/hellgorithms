// Problem Description
// You are given a matrix A and and an integer B,
// you have to perform scalar multiplication of matrix A with an integer B.

export function matrixScalarProduct(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = A[i][j] * B;
    }
  }
  return A;
}
