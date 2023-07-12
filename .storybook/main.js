const path = require("path");

const stories = ["../src/*/*/*.story.js"];

const addons = [
  "@storybook/addon-docs",
  '@openeuropa/storybook-addon-code',
  "@storybook/addon-controls",
  "storybook-addon-designs",
  "@storybook/addon-viewport",
  "@storybook/addon-a11y",
  "@geometricpanda/storybook-addon-badges",
  "@storybook/addon-interactions",
];

const webpackFinal = (config) => {
  config.module.rules.push({
    test: /\.story\.js?$/,
    loader: require.resolve("@whitespace/storybook-addon-code/loader"),
    enforce: "pre",
  });
  config.module.rules.push(
    {
      test: /\.twig$/,
      loader: "twing-loader",
      options: {
        environmentModulePath: path.resolve(`${__dirname}/environment.js`),
      },
    }
  );

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === "ProgressPlugin") {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  staticDirs: ['../assets'],
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
};
