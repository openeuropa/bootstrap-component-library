// eslint.config.cjs
const { defineFlatConfig } = require('eslint-define-config');
const babelParser = require('@babel/eslint-parser'); // IMPORTANT: require the parser
const jestPlugin = require('eslint-plugin-jest');

module.exports = defineFlatConfig([
  {
    ignores: [
      '**/slimselect.min.js',
      'src/themes/*/js/',
      'src/themes/*/storybook/bcl-stories'
    ]
  },
  {
    files: ['**/*.js'],

    // Must provide an object parser, not just a string
    languageOptions: {
      parser: babelParser,
      // parserOptions is where you set Babel parser config
      parserOptions: {
        // Tells babel-parser to not require a Babel config file
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        window: 'readonly',
        document: 'readonly'
      }
    },

    plugins: {
      jest: jestPlugin
    },

    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
      'import/extensions': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'new-cap': 'off',
      'camelcase': 'off'
    }
  },
  {
    files: ['src/**/*.test.js'],
    rules: {
      'no-undef': 'off'
    }
  }
]);
