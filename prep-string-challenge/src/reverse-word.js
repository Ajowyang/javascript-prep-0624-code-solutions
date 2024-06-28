/* exported reverseWord */
function reverseWord(word) {
  let result = '';
  for (let i = word.length - 1; i > -1; i--) {
    result += word[i];
  }
  return result;
}
