// Problem Description
// You are given an array A of N elements.
// Find the number of triplets i,j and k such that i<j<k and A[i]<A[j]<A[k]
export function countIncreasingTriplets(A) {
  let count = 0;
  const n = A.length;

  for (let j = 1; j < n - 1; j++) {
    let leftCount = 0;
    let rightCount = 0;

    for (let i = 0; i < j; i++) {
      if (A[i] < A[j]) {
        leftCount++;
      }
    }

    for (let k = j + 1; k < n; k++) {
      if (A[j] < A[k]) {
        rightCount++;
      }
    }

    count += leftCount * rightCount;
  }

  return count;
}
