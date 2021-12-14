## BCL builder

The `@openeuropa/bcl-builder` is a package providing scripts to be executed via
the command line, `styles`, `scripts`, `copy`, `rename` and `sprite`.
They can be used respectively to compile SASS files and minify css
files, compile and minify js files, to copy files or rename files and to generate
svg sprites.
It comes with a `bin` file that is available when the package is installed and
can be run as `npm run ecl-builder scriptName`.
It supports a configuration file `bcl-builder.config.js` where each script can
be configured to perform specific operations in the enviroment where they are
used.

### Api

The builder uses by default a bcl-builder.config.js in the same folder where the
builder script is executed.
This file will define the different operations you want to perform via the builder.
The config file is basically an export of the configuration for the different
commands which all supports multiple operations as items in an array.

`module.exports = { scripts: [{ entry, dest, options } ...], styles: [{ entry, dest, options } ...], rename: [{ entry, dest, options } ...], copy: [{ from, to, options } ...], sprite: [[{ entry, dest, options } ...], };`

#### Styles

`styles: [ { entry (string), dest (string), options (object) [plugins for postcss] https://github.com/postcss/postcss/blob/main/docs/plugins.md { minify (includes css nano for minification) } }, ],`

#### Scripts

`scripts: [ { entry (string), dest (string), options: (object) [rollup js configuration https://rollupjs.org/guide/en/#javascript-api] }, }, ],`

#### Copy

`copy: [ { from: (string), to: (string), options: (object) [copyfiles api conf https://www.npmjs.com/package/copyfiles], }, ],`

#### Reaname

`rename: [ { from: (string), to: (string), options: (object) { search: (glob), operation: [prefix|suffix|rewrite|extension], }, }, ],`

#### Sprite

`sprite: [ { entry: (string), dest: (string), options: (object) { file: (string) (defaut: bcl-icons.svg), list: (array of file names) (optional), }, }, ],`
