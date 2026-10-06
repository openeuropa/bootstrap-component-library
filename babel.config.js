module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "classic" }],
      ],
      plugins: [
        ["@babel/plugin-transform-runtime", { moduleName: "@babel/runtime" }],
        [
          "babel-plugin-polyfill-corejs3",
          { method: "usage-global", version: 3 },
        ],
      ],
      sourceType: "unambiguous",
    };
  }
  return {};
};
