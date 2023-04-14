const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = new Array(matrix.length)
    .fill([])
    .map((arr) => new Array(matrix[0].length).fill(0));
  const isMine = matrix.some((arr) => arr.findIndex((el) => el === true) > 0);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === true) {
        resultMatrix[row][col] = 1;
        continue;
      }
      const upCell = row - 1 >= 0 ? matrix[row - 1][col] : false;
      const downCell = row + 1 < matrix.length ? matrix[row + 1][col] : false;
      const leftCell = col - 1 >= 0 ? matrix[row][col - 1] : false;
      const rightCell =
        col + 1 < matrix[0].length ? matrix[row][col + 1] : false;
      if (upCell) resultMatrix[row][col]++;
      if (downCell) resultMatrix[row][col]++;
      if (leftCell) resultMatrix[row][col]++;
      if (rightCell) resultMatrix[row][col]++;
      if (resultMatrix[row][col] === 0 && isMine) resultMatrix[row][col]++;
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper,
};
