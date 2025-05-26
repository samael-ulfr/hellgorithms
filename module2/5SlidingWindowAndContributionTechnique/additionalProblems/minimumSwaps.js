// Given an array of integers A and an integer B,
// find and return the minimum number of swaps required to bring
// all the numbers less than or equal to B together.
// Note: It is possible to swap any two elements, not necessarily consecutive.

function minimumSwaps(A, B) {
  let good = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= B) {
      good++;
    }
  }

  if (good === 0) return 0;

  let bad = 0;
  for (let i = 0; i < good; i++) {
    if (A[i] > B) {
      bad++;
    }
  }
  let minBad = bad;

  for (let i = 1; i <= A.length - good; i++) {
    if (A[i - 1] > B) bad--;
    if (A[i + good - 1] > B) bad++;
    minBad = Math.min(minBad, bad);
  }
  return minBad;
}

A = [5, 17, 100, 11];
B = 20;

console.log(minimumSwaps(A, B));
