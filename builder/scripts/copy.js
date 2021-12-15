/**
 * Copy files.
 *
 * @param {string} from - Path to a folder or file.
 * @param {string} to - String to prefix, suffix or replace the current file name.
 * @param {object} options - Object
 *
 * Example config object: {
 *  copy: [
 *   {
 *     from: [path.resolve(nodeModules, "myfile.js")],
 *     to: path.resolve(outputFolder, "js"),
 *     options: { up: true },
 *   },
 * ],
 */

const fs = require("fs");
const path = require("path");
const copy = require("copyfiles");

module.exports = (from, to, options) => {
  const executor = async () => {
    from.push(to);
    await copy(from, options, function (err) {
      if (err) console.error(err);
    });
  };

  executor();
};
