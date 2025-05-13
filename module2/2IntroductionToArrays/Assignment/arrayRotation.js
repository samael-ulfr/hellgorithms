// Given an integer array A of size N and an integer B,
// you have to return the same array after rotating it B times towards the right.

function reverseInRange(arr, start, end) {
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function arrayRotation(arr, B) {
  //first rotate the whole array
  //then rotate the array from 0 to B-1
  //then rotate the array from B to N-1
  // also take edge case into consideration that if B>arr.length
  if (B > arr.length) {
    B = B % arr.length;
  }
  return reverseInRange(
    reverseInRange(reverseInRange(arr, 0, arr.length - 1), 0, B - 1),
    B,
    arr.length - 1
  );
}
