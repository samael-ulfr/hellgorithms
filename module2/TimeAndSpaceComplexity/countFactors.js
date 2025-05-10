// Given an integer A, you need to find the count of it's factors.
// Factor of a number is the number which divides it perfectly leaving no remainder.
// Example : 1, 2, 3, 6 are factors of 6

function countFactors(A) {
  let count = 0;
  for (let i = 1; i * i <= A; i++) {
    if (A % i === 0) {
      if (i * i === A) {
        count = count + 1;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
}
