// You are trying to construct a message but you only have a limited collection of letters.  Determine if the message can be built with the letters that you are given.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Input: message {string}, letters {string}

// Output: boolean

// Constraints:
// if M is the length of messages and N is the length of letters:

// Time Complexity: O(M+N)
// Space Complexity: O(N)

//  Example 1:
// 'aa', 'abc' -> false

// requires two a's but there is only one available

// Example 2:
// 'abc', 'dcba' -> true

// a, b, and c are available in letters

// Example 3:
// 'aabbcc', 'bcabcaddff' -> true

// all the available letters are available

function constructNote(message, letters) {
  //build frq counter of letters
  let letterObj = {};
  for (let i = 0; i < letters.length; i++) {
    letterObj[letters[i]] = (letterObj[letters[i]] || 0) + 1;
  }
  //if message contains letters in the letterObj return true, otherwise return false
  for (let j = 0; j < message.length; j++) {
    if (!letterObj[message[j]]) return false;
    else letterObj[message[j]]--;
  }
  return true;
}
