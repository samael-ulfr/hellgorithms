// Given an integer array A of size N.
// Return 1 if the array can be arranged to form an arithmetic progression,
//  otherwise return 0.
// A sequence of numbers is called an arithmetic progression
// if the difference between any two consecutive elements is the same.
function arithmeticProgressions(A) {
  A.sort(function (a, b) {
    return b - a;
  });

  let diff = A[1] - A[0];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] !== diff) return 0;
  }

  return 1;
}
