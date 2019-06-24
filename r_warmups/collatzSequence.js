// Implement the following functions:

// Collatz sequence.

// Given a positive whole number n, this function should produce an array given by the following rules:

// 1. The first element in the array should be n.

// 2. After the first element, each subsequent element should be equal to:
//   - Half the previous element, if the previous element is even,
//   - Three times the previous element plus one, if the previous element is odd.
// Note that in either case, the result should be an integer.

// 3. The last element in the array should be 1. When you encounter your first 1, you should push it to the array and return the array.

// Examples:

// collatzSequence(4); // [4, 2, 1]
// collatzSequence(6); // [6, 3, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(7); // [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(0); // "Input must be a positive whole number."
// collatzSequence([]); // "Input must be a positive whole number."

// (For more, see https://en.wikipedia.org/wiki/Collatz_conjecture)

// You should implement this function in two ways: iteratively and recursively.

function collatzSequenceIterative(num) {
  if (!(Number.isInteger(num) && num > 0))
    return "Input must be a positive whole number.";
  let numArr = [num];
  while (num !== 1) {
    num = num % 2 === 1 ? 3 * num + 1 : num / 2;
    numArr.push(num);
  }
  return numArr;
}

function collatzSequenceRecursive(num) {
  if (!(Number.isInteger(num) && num > 0))
    return "Input must be a positive whole number.";
  if (num === 1) return [1];
  return [num].concat(
    collatzSequenceRecursive(num % 2 ? 3 * num + 1 : num / 2)
  );
}

function collatzSequenceIterative(n) {
  //input only pos whole num; output arr of numbers, n is always first ele
  if (n <= 0 || !Number.isInteger(n))
    return "Input must be a positive whole number.";
  let newArr = [n];
  while (n > 1) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    newArr.push(n);
  }
  return newArr;
}

function collatzSequenceRecursive(n) {
  if (n <= 0 || !Number.isInteger(n))
    return "Input must be a positive whole number.";
  let newArr = [n];
  function helper(num) {
    //base case
    if (num === 1) return newArr;
    num = num % 2 ? num * 3 + 1 : num / 2;
    newArr.push(num);
    helper(num);
  }
  helper(n);
  return newArr;
}
