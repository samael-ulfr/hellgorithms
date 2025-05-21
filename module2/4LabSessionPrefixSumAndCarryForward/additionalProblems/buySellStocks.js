// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction
// (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Return the maximum possible profit.

function buySellStock(A) {
  let profit = 0;
  let min = Infinity;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
    temp = A[i] - min;
    if (temp > profit) profit = temp;
  }
  return profit;
}
