const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(string, encryptedWord) {
    if (string === undefined || encryptedWord === undefined)
      throw Error("Incorrect arguments!");

    const lowerCased = string.toLowerCase();
    encryptedWord = encryptedWord.toLowerCase();
    const firstCharCode = "a".charCodeAt(0);
    const lastCharCode = "z".charCodeAt(0);
    let curEncWordIdx = 0;
    let result = "";

    for (let char of lowerCased) {
      if (
        char.charCodeAt(0) <= lastCharCode &&
        char.charCodeAt(0) >= firstCharCode
      ) {
        const newCharCode =
          encryptedWord.charCodeAt(curEncWordIdx) +
          char.charCodeAt(0) -
          firstCharCode;

        result += String.fromCharCode(
          newCharCode > lastCharCode
            ? newCharCode - (lastCharCode - firstCharCode + 1)
            : newCharCode
        );
        curEncWordIdx++;
        if (curEncWordIdx >= encryptedWord.length) curEncWordIdx = 0;
      } else {
        result += char;
      }
    }

    return this.isDirect
      ? result.toUpperCase()
      : result.split("").reverse().join("").toUpperCase();
  }
  decrypt(string, encryptedWord) {
    if (string === undefined || encryptedWord === undefined)
      throw Error("Incorrect arguments!");

    const lowerCased = string.toLowerCase();
    const firstCharCode = "a".charCodeAt(0);
    const lastCharCode = "z".charCodeAt(0);
    encryptedWord = encryptedWord.toLowerCase();
    let curEncWordIdx = 0;
    let result = "";

    for (let char of lowerCased) {
      if (
        char.charCodeAt(0) <= lastCharCode &&
        char.charCodeAt(0) >= firstCharCode
      ) {
        const newCharCode =
          char.charCodeAt(0) -
          (encryptedWord.charCodeAt(curEncWordIdx) - firstCharCode);

        result += String.fromCharCode(
          newCharCode < firstCharCode
            ? lastCharCode - (firstCharCode - newCharCode - 1)
            : newCharCode
        );
        curEncWordIdx++;
        if (curEncWordIdx >= encryptedWord.length) curEncWordIdx = 0;
      } else {
        result += char;
      }
    }

    return this.isDirect
      ? result.toUpperCase()
      : result.split("").reverse().join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
