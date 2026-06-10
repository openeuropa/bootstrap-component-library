const { defineConfig } = require("eslint/config");
const jestPlugin = require("eslint-plugin-jest");

module.exports = defineConfig([
  {
    ignores: [
      "**/slimselect.min.js",
      "**/slim-select-2/slimselect.min.js",
      "src/themes/*/js/",
      "src/themes/*/storybook/bcl-stories",
    ],
  },
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },

    plugins: {
      jest: jestPlugin,
    },

    rules: {
      "no-param-reassign": "off",
      "new-cap": "off",
      camelcase: "off",
    },
  },
  {
    files: ["src/**/*.test.js"],
    rules: {
      "no-undef": "off",
    },
  },
]);
