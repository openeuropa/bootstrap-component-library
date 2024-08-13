/**
 * Compile scss files.
 *
 * @param {string} from - Path to a folder or file.
 * @param {string} to - String to prefix, suffix or replace the current file name.
 * @param {object} options - Object
 *
 * Example config object: {
 *
 *  color-scheme: [
 *   {
 *     entry: path.resolve("resources/sass/color-scheme-variables.scss"),
 *     dest: path.resolve(outputFolder, "assets/css/color_scheme.min.css"),
 *     options: {
 *       includePaths,
 *       sourceMap: "file",
 *     },
 *   },
 * ],
 */

const sass = require("sass");
const path = require("path");
const fs = require("fs");
const postcss = require("postcss");
const cssnano = require("cssnano");
const prefixer = require("postcss-prefix-selector");
const autoprefixer = require("autoprefixer");

const getPlugins = (options) => {
  const plugins = [];

  plugins.push(autoprefixer({ grid: "no-autoplace" }));

  if (options.minify) {
    plugins.push(cssnano({ safe: true }));
  }

  return plugins;
};

const buildColorScheme = (entry, dest, options) => {
  const plugins = getPlugins(options);

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === "file") {
    postcssSourceMap = options.sourceMap; // as a file
  }

  // Read contents of the entry file and the base color scheme SCSS file
  const entryVariables = fs.readFileSync(entry, "utf8");
  const imports = fs.readFileSync(
    path.resolve(
      ...(options.includePaths || []),
      "@openeuropa/bcl-theme-default/src/scss/color-scheme.scss"
    ),
    "utf8"
  );
  const generator = fs.readFileSync(
    path.resolve(
      ...(options.includePaths || []),
      "@openeuropa/bcl-theme-default/src/scss/color_scheme/generator.scss"
    ),
    "utf8"
  );

  // Concatenate the contents
  const scssContent = imports + "\n" + entryVariables + "\n" + generator;

  const sassResult = sass.renderSync({
    data: scssContent,
    outFile: dest,
    noErrorCss: true,
    outputStyle: "expanded",
    sourceMap: options.sourceMap !== false,
    sourceMapContents: options.sourceMap === true,
    sourceMapEmbed: options.sourceMap === true,
    includePaths: [
      path.resolve(process.cwd(), "node_modules"),
      ...(options.includePaths || []),
    ],
  });

  postcss(plugins)
    .use(
      prefixer({
        prefix: options.prefix ? options.prefix : "",

        transform: function (
          prefix,
          selector,
          prefixedSelector,
          filePath,
          rule
        ) {
          if (prefix) {
            return prefixedSelector;
          } else {
            return selector;
          }
        },
      })
    )
    .process(sassResult.css, {
      map:
        postcssSourceMap === "file"
          ? { inline: false, prev: sassResult.map.toString() }
          : postcssSourceMap,
      from: entry,
      to: dest,
    })
    .then((postcssResult) => {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, postcssResult.css);

      if (postcssResult.map) {
        fs.writeFileSync(`${dest}.map`, postcssResult.map.toString());
      }
    });
};

module.exports = {
  getPlugins,
  buildColorScheme,
};
