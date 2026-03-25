const path = require("path");
const stories = require("../src/stories/bcl-stories");

const outputFolder = path.resolve(__dirname);
const defaultStorybookPath = path.resolve(__dirname, "../../default/storybook");

const excludePaths = [];
if (stories.length) {
  stories.forEach((story) => {
    excludePaths.push(
      `../../../{components,compositions}/**/${story}.story.js`,
    );
  });
}

module.exports = {
  copy: [
    {
      from: ["../../../{components,compositions}/**/*.story.js"],
      to: path.resolve(outputFolder, "bcl-stories"),
      options: { up: true, exclude: excludePaths },
    },
    {
      from: [path.resolve(defaultStorybookPath, ".storybook/*.js")],
      to: path.resolve(outputFolder, ".storybook"),
      options: { up: true },
    },
  ],
};
