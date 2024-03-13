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

Certainly! Here's an improved version of the markdown with better formatting and clarity:

---

#### Color Scheme

```javascript
color-scheme: [
  {
    entry (ex: ../path/to/your-colour-scheme.scss),
    dest (ex: ../path/to/compiled.css),
    options (object) [plugins for postcss]
    https://github.com/postcss/postcss/blob/main/docs/plugins.md {
      minify (includes css nano for minification)
    }
  },
],

 * Example config object: {
 color-scheme: [
  {
    entry: [path.resolve(nodeModules, "color-scheme.scss")],
    dest: path.resolve(outputFolder, "css"),
    options: {
      includePaths,
      sourceMap: "file",
    },
  },
],
```

Example SCSS color-scheme:

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

The color-scheme enables the possibility to theme the colors used in BCL. It overrides the variables `$theme-colors` used by Bootstrap ([Bootstrap Theme Colors](https://getbootstrap.com/docs/5.0/customize/color/#theme-colors)).

### Prerequisites

- BCL-Builder version >= 1.2.1
- BCL-Theme-Default >= 1.2.1

We've also added some new variables that overwrite and make use of extra classes:

- `.text-color-default`: Text color is changed based on the 'text' variable, overriding all text colors inside a component.
- `.bg-default`: Background color is changed based on the 'background' variable. It adds a background for the component but does not override if it already has a `bg` class (e.g., `bg-primary`).

### Files Inside the Theme Default

- `scss/color_scheme/alert`: Mixin that changes the colors of alerts
- `scss/color_scheme/background`: Mixin that adds the `bg-default` class
- `scss/color_scheme/badge`: Mixin that changes the colors of badges
- `scss/color_scheme/buttons`: Mixin that changes the colors of buttons
- `scss/color_scheme/link`: Mixin that changes the color of links
- `scss/color_scheme/list_group`: Mixin that changes the colors of list groups
- `scss/color_scheme/text`: Mixin that adds the `text-color-default` class
- `scss/color_scheme/utilities`: Mixin that changes the utilities: `bg-{color}` (e.g., `bg-primary`), `text-bg-{color}` (e.g., `text-bg-primary`), and `link-{color}` (e.g., `link-primary`)
- `scss/color_scheme/generator`: This includes all the mentioned mixins and calls them. It also adds the CSS variables on the color scheme class.

- `scss/color-scheme.scss`: This is the starting imports needed.

---
