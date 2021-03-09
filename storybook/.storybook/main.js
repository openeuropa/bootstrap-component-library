const path = require("path");

const stories = ["../../src/components/**/*.story.js"];

const addons = [
  "@storybook/addon-viewport",
  "@storybook/addon-cssresources",
  "@storybook/addon-docs",
  "@storybook/addon-controls",
  "@storybook/addon-a11y",
  "@whitespace/storybook-addon-html",
];

const webpackFinal = (config) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: "twing-loader",
    options: {
      environmentModulePath: path.resolve(`${__dirname}/environment.js`),
    },
  });
  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === "ProgressPlugin") {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  stories,
  addons,
  webpackFinal,
};
