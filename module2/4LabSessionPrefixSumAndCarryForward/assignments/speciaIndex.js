// Given an array, arr[] of size N, the task is to find the count of array indices such that
// removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

function specialIndex(A) {
  let pfo = [];
  let pfe = [];
  let specialIdx = 0;
  pfo[0] = 0;
  pfe[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    if (i % 2 === 0) {
      pfe[i] = pfe[i - 1] + A[i];
      pfo[i] = pfo[i - 1];
    } else {
      pfe[i] = pfe[i - 1];
      pfo[i] = pfo[i - 1] + A[i];
    }
  }
  for (let i = 0; i < A.length; i++) {
    let SO =
      getPrefixSum(pfo, 0, i - 1) + getPrefixSum(pfe, i + 1, A.length - 1);
    let SE =
      getPrefixSum(pfe, 0, i - 1) + getPrefixSum(pfo, i + 1, A.length - 1);
    if (SO === SE) specialIdx++;
  }
  return specialIdx;
}

function getPrefixSum(arr, start, end) {
  if (start > end) return 0;
  if (start === 0) return arr[end];

  return arr[end] - arr[start - 1];
}
