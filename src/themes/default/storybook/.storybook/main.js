const path = require("path");
const webpack = require("webpack");
const chromatic = process.env.STORYBOOK_ENV;

let stories = ["../../**/!(test*).story.js"];

const addons = [
  "@storybook/addon-docs",
  "@storybook/addon-controls",
  "storybook-addon-designs",
  "@storybook/addon-viewport",
  "@storybook/addon-a11y",
  "@geometricpanda/storybook-addon-badges",
  "@openeuropa/storybook-addon-code",
];

if (chromatic) {
  stories = ["../../**/*.story.js"];
  addons.push("@storybook/addon-interactions");
}

const webpackFinal = (config) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: "twing-loader",
    options: {
      environmentModulePath: path.resolve(`${__dirname}/environment.js`),
    },
  });

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    })
  );

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === "ProgressPlugin") {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../../../../../assets/"],
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
};
