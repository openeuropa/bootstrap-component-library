const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const globals = require("globals");
const jestPlugin = require("eslint-plugin-jest");

module.exports = defineConfig([
  {
    ignores: [
      "**/slimselect.min.js",
      "src/themes/*/js/",
      "src/themes/*/storybook/bcl-stories",
    ],
  },
  {
    files: ["**/*.js"],
    extends: [js.configs.recommended],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
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
