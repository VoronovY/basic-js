const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const action = {
    delNext: "--discard-next",
    delPrev: "--discard-prev",
    addNext: "--double-next",
    addPrev: "--double-prev",
  };

  const res = [];
  const hash = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === action.delPrev) {
      if (i - 1 < 0) continue;
      if (!hash.has(i - 1)) res.pop();
      hash.add(i - 1);
    } else if (arr[i] === action.addPrev) {
      if (i - 1 < 0) continue;
      if (!hash.has(i - 1)) res.push(arr[i - 1]);
    } else if (arr[i] === action.delNext) {
      if (i >= arr.length - 1) continue;
      hash.add(i + 1);
    } else if (arr[i] === action.addNext) {
      if (i >= arr.length - 1) continue;
      res.push(arr[i + 1]);
    } else {
      if (!hash.has(i)) res.push(arr[i]);
    }
  }
  return res;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === action.addNext && i + 1 < arr.length) {
  //     if (!hash.has(i + 1)) res.push(arr[i + 1]);
  //   } else if (arr[i] === action.delPrev && res.at(-1)) {
  //     if (!hash.has(i - 1)) res.pop();
  //   } else if (arr[i] === action.addAddPrev && i > 0) {
  //     if (!hash.has(i - 1)) res.push(arr[i - 1]);
  //     hash.add(i - 1);
  //   } else if (arr[i] === action.delNext && i + 1 < arr.length) {
  //     if (!hash.has(i + 1)) {
  //       hash.add(i + 1);
  //       continue;
  //     }
  //   } else {
  //     res.push(arr[i]);
  //   }
  // }
  // return res;
}

module.exports = {
  transform,
};
