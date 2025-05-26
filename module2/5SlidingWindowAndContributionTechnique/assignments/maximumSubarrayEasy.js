function maximumSubarrayEasy(A, B, C) {
  let pf = [];
  pf[0] = C[0];
  for (let i = 1; i < A; i++) {
    pf[i] = C[i] + pf[i - 1];
  }
  let ans = 0;
  for (let i = 0; i < A; i++) {
    for (let j = i; j < A; j++) {
      sum = 0;
      if (i === 0) {
        sum = pf[j];
      } else {
        sum = pf[j] - pf[i - 1];
      }

      if (sum <= B) {
        ans = Math.max(Number(ans), Number(sum));
      }
    }
  }
  return ans;
}
