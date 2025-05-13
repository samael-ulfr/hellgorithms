// You are given an integer array A.
// You have to find the second largest element/value in the array or report that no such element exists.




// If the element is greater than largest:
// That means we've found a new largest.
// So, assign secondLarge = largest (the old largest becomes the second largest).
// Then update largest = current element.
// Else if the element is between largest and secondLarge (i.e., arr[i] > secondLarge && arr[i] < largest):
// Then update secondLarge = arr[i].

function secondLargest(arr) {
    if (arr.length < 2) return -1;
    let largest = -Infinity;
    let secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLarge = largest;
        largest = arr[i];
      } else if (arr[i] > secondLarge && arr[i] < largest) {
        secondLarge = arr[i];
      }
    }
  
    if (secondLarge === -Infinity) {
      return -1;
    } else {
      return secondLarge;
    }
  }
  
  
  