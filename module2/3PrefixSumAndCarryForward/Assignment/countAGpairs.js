// You have given a string A having Uppercase English letters.
// You have to find the number of pairs (i, j) such that A[i] = 'A', A[j] = 'G' and i < j.

function countAGpairs(str) {
  let countA = 0;
  let countAG = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") countA++;
    if (str[i] === "G") countAG += countA;
  }
  return countAG;
}
