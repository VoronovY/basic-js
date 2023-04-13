const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const hash1 = {};
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    if (!hash1[s1[i]]) hash1[s1[i]] = 0;
    hash1[s1[i]]++;
  }
  for (let i = 0; i < s2.length; i++) {
    if (hash1[s2[i]] > 0) {
      result++;
      hash1[s2[i]]--;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
