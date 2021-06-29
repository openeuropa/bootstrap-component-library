const fs = require("fs");
const path = require("path");
const copy = require("copyfiles");
const globby = require("globby");

module.exports = (patterns, from, to) => {
  const executor = async () => {
    patterns.map(async (file) => {
      const input = path.resolve(from, file);
      const dest = path.resolve(to, file);

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await copy(input, dest);
    });
  };

  executor();
};
