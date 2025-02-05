module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  plugins: ['jest'],
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: [
    '**/slimselect.min.js',
    '**/slim-select-2/slimselect.min.js',
    'src/themes/*/js/',
    'src/themes/*/storybook/bcl-stories',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'new-cap': 'off',
    'camelcase': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
