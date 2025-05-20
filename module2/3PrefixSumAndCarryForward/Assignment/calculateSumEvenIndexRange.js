// You are given:
// An integer array A representing the array of numbers of size N.
// A 2D array B of size Q, where each row B[i] contains two integers B[i][0] and B[i][1],
// representing the range [L, R].
// For each query in B, calculate the sum of elements in A
// at EVEN indices within the specified range [L, R]
// and return the results as an array.

function calculateSumEvenIndexRange(arr, B) {
  let prefixArr = [];
  const result = [];
  prefixArr[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) prefixArr[i] = prefixArr[i - 1] + arr[i];
    else {
      prefixArr[i] = prefixArr[i - 1];
    }
  }
  for (let i = 0; i < B.length; i++) {
    let start = B[i][0];
    let end = B[i][1];

    if (start !== 0) {
      result.push(prefixArr[end] - prefixArr[start - 1]);
    } else {
      result.push(prefixArr[end]);
    }
  }
  return result;
}
