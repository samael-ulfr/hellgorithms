// You are given an array A of N integers.
// Return a 2D array consisting of all the subarrays of the array
// Note : The order of the subarrays in the resulting 2D array does not matter.

function allSubArray(A) {
  const subArr = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      const temp = [];

      for (let k = i; k <= j; k++) {
        temp.push(A[k]);
      }

      subArr.push(temp);
    }
  }
  return subArr;
}
