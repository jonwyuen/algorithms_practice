// 1. Implement a function called

// areThereDuplicates

// which checks whether there are any duplicates among the arguments passed in. The function should either run in O(n) time and O(n) space or O(n log n) time and O(1) space.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
  let sortedArgs = args.sort((a, b) => a > b);
  let start = 0;
  let end = sortedArgs.length - 1;
  while (start < end) {
    if (sortedArgs[start] === sortedArgs[start + 1]) return true;
    start++;
  }
  return false;
}
