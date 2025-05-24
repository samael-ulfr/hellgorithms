// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can
// obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.
// Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.

function sumOfAllSubarrays(A) {
  let sum = BigInt(0);
  const n = A.length;
  for (let i = 0; i < n; i++) {
    const count = BigInt(i + 1) * BigInt(n - i);
    sum += count * BigInt(A[i]);
  }
  return sum.toString();
}
