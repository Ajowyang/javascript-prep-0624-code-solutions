/* exported isLowerCased */
function isLowerCased(word) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] != word[i].toLowerCase()) {
      result = false;
    }
  }
  return result;
}
