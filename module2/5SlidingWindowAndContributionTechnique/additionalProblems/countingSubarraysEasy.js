// Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.

function countingSubarraysEasy(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let sumArr = 0;
    for (let j = i; j < A.length; j++) {
      sumArr += Number(A[j]);
      if (sumArr < B) count++;
    }
  }
  return count;
}
