// Write a function called findExtraIndex which takes in two sorted arrays that are almost identical. The only difference is that the first array has one element that the second array does not. Your function should return the index of the additional element in the first array.

// findExtraIndex([1, 2, 3], [1, 3]) // 1
// findExtraIndex([2, 4, 6, 8, 9, 10, 12] , [2, 4, 6, 8, 10, 12]) //  4
// findExtraIndex([3, 5, 7, 9, 11, 13] , [3, 5, 7, 11, 13]) //  3

// Time Complexity - O(log N)

function findExtraIndex(arr1, arr2) {
  let index = 0;
  let left = 0;
  let right = arr2.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr2[mid] === arr1[mid]) {
      left = mid + 1;
    } else {
      index = mid;
      right = mid - 1;
    }
  }
  return index;
}

function findExtraIndex(arr1, arr2) {
  let idx = 0;
  let start = 0;
  let end = arr1.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    //if mids are equal, move start
    if (arr1[mid] === arr2[mid]) {
      start = mid + 1;
      //if mids not equal, store the mid as idx and change end
    } else {
      idx = mid;
      end = mid - 1;
    }
  }
  return idx;
}
