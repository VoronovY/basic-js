const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 1) return str;
  let result = "";
  let left = 0;
  let right = 0;

  while (right < str.length) {
    if (str[right] !== str[left]) {
      result += `${right - left > 1 ? right - left : ""}${str[left]}`;
      left = right;
    }
    right++;
  }
  if (left !== right) {
    result += `${right - left > 1 ? right - left : ""}${str[left]}`;
  }
  return result;
}

module.exports = {
  encodeLine,
};
