const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const hash = {};
  const result = [];

  names.forEach((el) => {
    if (hash[el]) {
      const newFileName = `${el}(${hash[el]})`;
      hash[newFileName] = 1;
      result.push(newFileName);
    } else {
      result.push(el);
    }
    hash[el] ? hash[el]++ : (hash[el] = 1);
  });
  return result;
}

module.exports = {
  renameFiles,
};
