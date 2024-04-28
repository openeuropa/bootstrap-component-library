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

---

#### Color Scheme

```javascript
 * Example config object: {
 colorScheme: [
  {
    entry: path.resolve(outputFolder, "color-scheme.scss"),
    dest: path.resolve(outputFolder, "assets/css/color_scheme.min.css"),
    options: {
      includePaths,
      sourceMap: "file",
    },
  },
],
```

This following example is the entry of the colorScheme. The scss file should look like this. It also support multiple color schemes.
Example SCSS file of color-scheme.scss:

```scss
$colors-schemes: (
  "pixy-pink": (
    "primary": #4eac00,
    "secondary": #fbff00,
    "danger": #ff8800,
    "success": #4dff00,
    "text": #294d26,
    "background": #ffdfb0,
    "link": #7b00ff,
  ),
);
```

You can find multiple plugins here:
[Postcss Plugins](https://github.com/postcss/postcss/blob/main/docs/plugins.md)

The color-scheme enables the possibility to theme the colors used in BCL. It overrides the variables `$theme-colors` used by Bootstrap ([Bootstrap Theme Colors](https://getbootstrap.com/docs/5.0/customize/color/#theme-colors)).

We've also added some new variables that overwrite and make use of extra classes:

- `.text-color-default`: Text color is changed based on the 'text' variable, overriding all text colors inside a component.
- `.bg-default`: Background color is changed based on the 'background' variable. It adds a background for the component but does not override if it already has a `bg` class (e.g., `bg-primary`).

### Prerequisites

- BCL-Builder version >= 1.2.1
- BCL-Bootstrap version >= 1.2.1
- BCL-Theme-Default >= 1.2.1

### Setup Color Schema

Step 1:
Depending on your package manager:

Yarn:

- yarn add @openeuropa/bcl-builder --save
- yarn add @openeuropa/bcl-bootstrap --save
- yarn add @openeuropa/bcl-theme-default --save

NPM:

- npm install @openeuropa/bcl-builder --save
- npm install @openeuropa/bcl-bootstrap --save
- npm install @openeuropa/bcl-theme-default --save

Step 2:
Add the following bcl-builder.config.js file:

```javascript
  colorScheme: [
    {
      entry: path.resolve(outputFolder, "path to the color-scheme scss file"),
      dest: path.resolve(outputFolder, "compiled "),
      options: {
        includePaths,
        minify: true,
        sourceMap: "file",
      },
    },
  ],
```

Step 3:
Add in your package.json the following command:

```javascript
  "build:color-scheme": "bcl-builder color-scheme",
```

Note: We are using ([npm-run-all package](https://www.npmjs.com/package/npm-run-all)) in BCL in order for all scripts for bcl-builder to be run at once:
Example:

```javascript
    "build": "npm-run-all build:*",
    "build:styles": "bcl-builder styles",
    "build:color-scheme": "bcl-builder color-scheme",
    "build:scripts": "bcl-builder scripts",
    "build:copy": "bcl-builder copy",
    "build:sprite": "bcl-builder sprite",
```

---
