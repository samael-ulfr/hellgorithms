// Given an array A of size N, find the subarray of size B with the least average.

function subarrayWithLeastAvg(A, B) {
  let ans = Infinity;
  let i = 0,
    j = B - 1,
    sum = 0;
  let minIndex = 0;
  for (let r = 0; r < B; r++) {
    sum += A[r];
  }
  ans = sum / B;
  i++;
  j++;

  while (j < A.length) {
    sum = sum + A[j] - A[i - 1];

    if (sum / B < ans) {
      minIndex = i;
    }

    ans = Math.min(ans, sum / B);
    i++;
    j++;
  }
  return minIndex;
}
