// Write a function called numberUniques which accepts an array of sorted numbers and returns the number of unique values in the array.

// numberUniques([1,1,1,2,2,3,3,4,5]) // 5
// numberUniques([1,2,2,3,4]) // 4
// numberUniques([8,10,12,12,13,13,15]) // 5
// numberUniques([-2,-2,5,6,7]) // 4
// numberUniques([-3,-2,-1,0,0,1,2,3,6,10,11,22,22]) // 11

// Time Complexity - O(n)
// Space Complexity - O(1)

function numberUniques(array) {
  let i = 0;
  let count = 0;
  while (i < array.length) {
    if (array[i] !== array[i + 1]) {
      count += 1;
      i++;
    } else {
      i++;
    }
  }
  return count;
}

function numberUniques(arr) {
  let curr = 0;
  let next = 1;
  let count = 0;
  while (curr < arr.length) {
    if (arr[curr] !== arr[next]) {
      count++;
    }
    curr++;
    next++;
  }
  return count;
}
