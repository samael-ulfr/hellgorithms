// Given an array A of N integers and also given two integers B and C.
//  Reverse the elements of the array A within the given inclusive range [B, C].

export function reverseInRange(arr, start, end) {
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
