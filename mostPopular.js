// The function mostPopular should take a word and return the most common letter in that word.

// mostPopular("abbaaac")  // "a"
// mostPopular("vroom")    // "o"
// If there is a tie for most common letter, the letter that first reached the tie should be the winner:

// mostPopular("cabba")    // "b"
// mostPopular("caabb")    // "a"

const mostPopular = word => {
  let letterCounts = new Map();
  let highCount = 0;
  let highLetter;

  for (let letter of word) {
    const currCount = letterCounts.get(letter) || 0;
    const newCount = currCount + 1;
    letterCounts.set(letter, newCount);

    if (newCount > highCount) {
      highCount = newCount;
      highLetter = letter;
    }
  }
  return highLetter;
};
