// Write a function called findPairs, that takes an array and value as input.  Your goal is to find the number of the pairs in the array that sum to x.  You can assume the values in the array are integers and that all the values are unique and sorted.

// Constraints:

// Time Complexity - O(n)

// findPairs([1,2,3,4,5,6,7],8) // 3
// findPairs([1,2,3,4,5,6],6) // 2
// findPairs([],4) // 0

// O(n) space
// function findPairs(arr, x) {
//   let cache = new Set(arr);
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     cache.delete(arr[i])
//     if(cache.has(x - arr[i])) count++
//   }
//   return count;
// }

// O(1) space
function findPairs(arr, num) {
    var start = 0;
    var end = arr.length - 1;
    var counter = 0;
    while (start < end) {
        if (arr[start] + arr[end] === num) {
            counter++;
            start++;
            end--;
        } else if (arr[start] + arr[end] < num) {
            start++;
        } else {
            end--;
        }
    }
    return counter;
}

//two pointers
function findPairs(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let count = 0;

    while (start < end) {
        if (arr[start] + arr[end] === num) {
            count++;
            start++;
            end--;
        } else if (arr[start] + arr[end] > num) {
            end--;
        } else start++;
    }
    return count;
}

function findPairs(arr, num) {
    let newSet = new Set(arr);
    let count = 0;
    for (let val of arr) {
        newSet.delete(val);
        if (newSet.has(num - val)) {
            count++;
        }
    }
    return count;
}
