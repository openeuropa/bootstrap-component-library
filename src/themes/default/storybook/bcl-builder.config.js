const path = require("path");

const outputFolder = path.resolve(__dirname);

module.exports = {
  copy: [
    {
      from: ["../../../{components,compositions}/**/*.story.js"],
      to: path.resolve(outputFolder, "bcl-stories"),
      options: { up: true },
    },
  ],
};
