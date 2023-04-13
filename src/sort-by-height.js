const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  arr.forEach((el, idx) => {
    if (el === -1) result[idx] = -1;
  });
  arr.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr.length && pointer2 < arr.length) {
    if (result[pointer1] === -1) {
      pointer1++;
      continue;
    }
    if (arr[pointer2] === -1) {
      pointer2++;
      continue;
    }
    result[pointer1] = arr[pointer2];
    pointer1++;
    pointer2++;
  }
  return result;
}

module.exports = {
  sortByHeight,
};
