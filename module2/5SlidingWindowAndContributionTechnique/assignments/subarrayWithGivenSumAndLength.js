// Given an array A of length N. Also given are integers B and C.
// Return 1 if there exists a subarray with length B having sum C and 0 otherwise

function subarrayWithGivenSumAndLength(A, B, C) {
  let sum = BigInt(0),
    i = 0;
  j = B - 1;
  for (let index = 0; index < B; index++) {
    sum += BigInt(A[index]);
  }
  i++;
  j++;
  console.log(BigInt(sum));
  if (Number(sum) === C) return 1;
  else {
    while (j < A.length) {
      sum += BigInt(A[j]) - BigInt(A[i - 1]);
      if (Number(sum) === C) {
        return 1;
      }

      i++;
      j++;
    }
  }
  return 0;
}
