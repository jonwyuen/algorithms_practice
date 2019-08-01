// Given a binary array (an array of only 0s and 1s), find the maximum number of consecutive 1s in this array.

// maxConsecutiveOnes([1,1,0,1,1,1]) // 3
// maxConsecutiveOnes([1,1,1,1,1,1]) // 6
// maxConsecutiveOnes([0,1,1,1,1,1]) // 5
// maxConsecutiveOnes([0,1,1,1,1,1,1,1,1,0,1]) // 8
// maxConsecutiveOnes([0]) // 0
// maxConsecutiveOnes([1]) // 1

// Time Complexity - O(n)
// Space Complexity - O(1)

function maxConsecutiveOnes(nums) {
  let currentOnes = 0;
  let maxOnes = 0;
  for (let item of nums) {
    if (item !== 1) currentOnes = 0;
    else maxOnes = Math.max(maxOnes, ++currentOnes);
  }
  return maxOnes;
}

function maxConsecutiveOnes(arr) {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) curr++;
    if (arr[i] === 0 || i === arr.length - 1) {
      if (curr > max) {
        max = curr;
      }
      curr = 0;
    }
  }
  return max;
}
