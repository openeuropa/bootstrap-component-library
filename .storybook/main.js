import { dirname, join } from "path";
const path = require("path");

const stories = ["../src/*/*/*.story.js"];

const addons = [
  getAbsolutePath("@storybook/addon-docs"),
  getAbsolutePath("@storybook/addon-controls"),
  getAbsolutePath("@storybook/addon-designs"),
  getAbsolutePath("@storybook/addon-viewport"),
  getAbsolutePath("@storybook/addon-a11y"),
  getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
];

const webpackFinal = (config) => {
  config.module.rules.push({
    test: /\.story\.js?$/,
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

const config = {
  framework: getAbsolutePath("@storybook/html-webpack5"),
  core: {
    builder: getAbsolutePath("@storybook/builder-webpack5"),
  },
  staticDirs: ['../assets'],
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
  docs: {},
};

export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
