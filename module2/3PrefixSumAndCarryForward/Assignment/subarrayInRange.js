// Given an array A of length N, return the subarray from B to C.

function subarrayInRange(A, B, C) {
  const subArr = [];
  for (let i = B; i <= C; i++) {
    subArr.push(A[i]);
  }

  return subArr;
}
