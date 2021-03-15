module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/plugin-transform-runtime"],
      sourceType: "unambiguous",
    };
  }
  return {};
};
