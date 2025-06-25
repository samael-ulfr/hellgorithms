// Problem Description
// Give a N * N square matrix A, return an array of its anti-diagonals.
//  Look at the example for more details.

export function antiDiagonals(A) {
  const N = A.length;
  const M = A[0].length;
  function printDiagonal(A, i, j, N) {
    const temp = [];
    while (i < N && j >= 0) {
      temp.push(A[i][j]);
      i++;
      j--;
    }
    return temp;
  }

  function printRtoL(A) {
    let ans = [];
    for (let j = 0; j < M; j++) {
      const temp1 = printDiagonal(A, 0, j, A.length);
      while (temp1.length < N) {
        temp1.push(0);
      }
      ans.push(temp1);
    }

    for (let i = 1; i < N; i++) {
      const temp2 = printDiagonal(A, i, M - 1, N);
      while (temp2.length < M) {
        temp2.push(0);
      }
      ans.push(temp2);
    }
    return ans;
  }
  return printRtoL(A);
}
