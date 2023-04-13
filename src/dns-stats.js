const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const hash = {};

  domains.forEach((el) => {
    let curRes = "";
    let prev = "";
    for (let i = el.length - 1; i >= 0; i--) {
      if (el[i] === "." || i === 0) {
        curRes = `.${i === 0 ? el[0] : ""}${curRes}`;
        prev += curRes;
        if (!hash[prev]) hash[prev] = 0;
        hash[prev]++;
        curRes = "";
        continue;
      }
      curRes = el[i] + curRes;
    }
  });
  return hash;
}

module.exports = {
  getDNSStats,
};
