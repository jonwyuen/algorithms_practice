// Write a function called bitArraySort which accepts an array of integers containing only 0's and 1's returns the same array back in sorted order. You can assume that all inputs will be valid.

// bitArraySort([0, 0, 0]) // [0, 0, 0]
// bitArraySort([1, 1, 1, 1]) // [1, 1, 1, 1]
// bitArraySort([0, 1, 1, 0, 1, 1, 0]) // [0, 0, 0, 1, 1, 1, 1]
// bitArraySort([1, 1, 1, 0, 1]) // [0, 1, 1, 1, 1]
// bitArraySort([1, 0, 0, 0, 0]) // [0, 0, 0, 0, 1]
// bitArraySort([1, 0, 1, 0, 0]) // [0, 0, 0, 1, 1]

// This should be done in place as well so be mindful of the following constraints below:

// Time Complexity - O(N)
// Space Complexity - O(1)

function bitArraySort(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    while (arr[start] === 0) start++;
    while (arr[end] === 1) end--;
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }
  return arr;
}

function bitArraySort(arr) {
  let countZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      countZeros++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (countZeros) {
      arr[i] = 0;
      countZeros--;
    } else {
      arr[i] = 1;
    }
  }
  return arr;
}
