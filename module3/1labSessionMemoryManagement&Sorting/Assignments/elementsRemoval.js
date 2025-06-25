// Given an integer array A of size N. You can remove any element from the array in one operation.
// The cost of this operation is the sum of all elements in the array present before this operation.
// Find the minimum cost to remove all elements from the array.

function elementsRemoval(A) {
  sum = 0;
  A.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < A.length; i++) {
    sum = sum + A[i] * (i + 1);
  }
  return sum;
}
