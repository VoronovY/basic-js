const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n < 10) {
    return 0;
  }
  const splitted = n.toString().split("");
  let left = 0;
  let right = 1;
  while (splitted[left] === splitted[right] && right < splitted.length) {
    left++;
    right++;
  }
  const spliceIdx = splitted[left] > splitted[right] ? right : left;
  splitted.splice(spliceIdx, 1);
  return Number(splitted.join(""));
}

module.exports = {
  deleteDigit,
};
