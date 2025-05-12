// Given an integer array A of size N and an integer B, 
// you have to return the same array after rotating it B times towards the right.


function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr;
  }
  