// Find the Bth smallest element in given array A .
// NOTE: Users should try to solve it in less than equal to B swaps.

function kthsmallest(A, B) {
  A.sort(function (a, b) {
    return a - b;
  });
  return A[B - 1];
}
