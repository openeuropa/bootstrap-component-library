const path = require("path");

const stories = ["../src/*/*/*.story.js"];

const addons = [
  "@storybook/addon-docs",
  "@storybook/addon-controls",
  "storybook-addon-designs",
  "@storybook/addon-viewport",
  "@storybook/addon-a11y",
  "@whitespace/storybook-addon-html",
];

const webpackFinal = (config) => {
  config.module.rules.push(
    {
      test: /\.story\.js?$/,
      loaders: [
        /*
        This loader should be first in the list unless you
        want tranfromations from other loaders to affect
        what’s shown in the code tabs
        */
        require.resolve("@whitespace/storybook-addon-code/loader"),
        // ...
      ],
      enforce: "pre",
    },
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
  staticDirs: ['../assets/'],
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
};
