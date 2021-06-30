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
