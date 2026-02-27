const path = require("path");
const webpack = require("webpack");
const environment = require("./environment.js");

const repoRoot = path.resolve(__dirname, "../../../../../");
const twigWrapperLoader = path.resolve(
  repoRoot,
  "tools/webpack/twig-wrapper-loader.cjs",
);

let stories = ["../bcl-stories/!(test*|deprecated*).story.js"];

const addons = [
  getAbsolutePath("@storybook/addon-docs"),
  getAbsolutePath("@storybook/addon-designs"),
  getAbsolutePath("@storybook/addon-a11y"),
  getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
];

const webpackFinal = (config) => {
  config.module = config.module || {};
  config.module.rules = config.module.rules || [];
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: twigWrapperLoader,
        options: {
          environmentModulePath: path.resolve(
            __dirname,
            "environment.js",
          ),
        },
      },
      {
        loader: require.resolve("twing-loader"),
        options: {
          environment,
        },
      },
    ],
  });

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === "ProgressPlugin") {
      config.plugins.splice(i, 1);
    }
  });

  config.resolve = config.resolve || {};
  config.resolve.fallback = {
    ...(config.resolve.fallback || {}),
    path: require.resolve("path-browserify"),
    util: require.resolve("util/"),
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    process: require.resolve("process/browser"),
    buffer: require.resolve("buffer/"),
  };

  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );

  return config;
};

const config = {
  framework: {
    name: getAbsolutePath("@storybook/html"),
    options: {},
  },

  core: {
    builder: getAbsolutePath("@storybook/builder-webpack5"),
  },

  staticDirs: ["../../../../../assets/"],
  stories,
  addons,
  webpackFinal,

  features: {
    postcss: false,
  },

  docs: {},
};

module.exports = config;

function getAbsolutePath(value) {
  return path.dirname(require.resolve(path.join(value, "package.json")));
}
