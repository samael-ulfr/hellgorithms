// Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
// 1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
// 2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
// Your task is to find the count of good subarrays in A.

function countingSubarraysEasy(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let sumArr = 0;
    for (let j = i; j < A.length; j++) {
      sumArr += Number(A[j]);
      len = i === 0 ? j + 1 : j - i + 1;
      if (len % 2 === 0) {
        if (sumArr < B) count++;
      } else {
        if (sumArr > B) count++;
      }
    }
  }
  return count;
}
