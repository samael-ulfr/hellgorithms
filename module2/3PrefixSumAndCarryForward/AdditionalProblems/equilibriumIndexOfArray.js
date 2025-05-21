// You are given an array A of integers of size N.
// Your task is to find the equilibrium index of the given array
// The equilibrium index of an array is an index such that the sum of elements at lower indexes
//  is equal to the sum of elements at higher indexes.
// If there are no elements that are at lower indexes or at higher indexes, then the corresponding
// sum of elements is considered as 0.
// Note:
// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

//approach -->
// calculate prefixsumLeft and right for an A[i]
// ifprefixsumleft[i] === prefixsumright[i] then it is quilibrium

function equilibriumIndexOfArray(A) {
  const preFixLeft = [];
  const preFixRight = [];

  preFixLeft[0] = 0;
  preFixRight[A.length - 1] = 0;

  for (let i = 1; i < A.length; i++) {
    preFixLeft[i] = preFixLeft[i - 1] + A[i - 1];
  }
  for (let i = A.length - 2; i >= 0; i--) {
    preFixRight[i] = preFixRight[i + 1] + A[i + 1];
  }

  for (let i = 0; i < A.length; i++) {
    if (preFixLeft[i] === preFixRight[i]) {
      return i;
    }
  }
  return -1;
}
