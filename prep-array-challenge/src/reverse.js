/* exported reverse */
function reverse(array) {
  let result = [];
  for (let i = array.length - 1; i > -1; i--) {
    result.push(array[i]);
  }
  return result;
}
