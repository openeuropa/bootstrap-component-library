const rename = require("file-rename");

module.exports = (folder, match, newName) => {
  const executor = async () => {
    await rename(folder, match, newName);
  };
  executor();
};
