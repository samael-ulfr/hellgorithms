// You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0.
// Specifically, make entire ith row and jth column zero.

export function rowToColumnZero(A) {
  const N = A.length;
  const M = A[0].length;

  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        A[i][j] = 0;
      }
    }
  }

  return A;
}
