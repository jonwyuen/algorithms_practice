// Write a function called moreZeroes which accepts an array and moves all 0's to the end of it while maintaining the relative order of the non-zero elements. The function should return the array.

// moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
// moveZeroes([1,3,10,2]) // [1,3,10,2]
// moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]
// moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]
// moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]
// moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]

// Time Complexity - O(n)
// Space Complexity - O(1)

function moveZeroes(nums) {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) nums[insertPos++] = num;
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
  return nums;
}

function moveZeroes(arr) {
  let start = 0;
  let next = 1;
  //when start hits first zero stop start, and move next only
  //move next until it hits a non zero, then swap with start
  while (next < arr.length) {
    if (arr[start] === 0) {
      while (arr[next] === 0 && next < arr.length - 1) next++;
      [arr[start], arr[next]] = [arr[next], arr[start]];
    }
    start++;
    next++;
  }
  return arr;
}
