/**
 * Compile scss files.
 *
 * @param {string} from - Path to a folder or file.
 * @param {string} to - String to prefix, suffix or replace the current file name.
 * @param {object} options - Object
 *
 * Example config object: {
 *
 *  styles: [
 *   {
 *     entry: [path.resolve(nodeModules, "myfile.js")],
 *     dest: path.resolve(outputFolder, "js"),
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

const buildStyles = (entry, dest, options) => {
  const plugins = getPlugins(options);

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === "file") {
    postcssSourceMap = options.sourceMap; // as a file
  }

  const sassResult = sass.renderSync({
    file: entry,
    outFile: dest,
    noErrorCss: true,
    silenceDeprecations: options.silenceDeprecations || [],
    outputStyle: "expanded",
    sourceMap: options.sourceMap !== false,
    sourceMapContents: options.sourceMap === true,
    sourceMapEmbed: options.sourceMap === true,
    includePaths: [
      path.resolve(process.cwd(), "node_modules"),
      ...(options.includePaths || []),
    ],
  });

  const processor = postcss(plugins);
  if (options.prefix) {
    console.error(
      `The prefix option is deprecated, use 'prefixer' instead, e.g.: prefixer: { prefix: "${options.prefix}" }`,
    );
    processor.use(prefixer({ prefix: options.prefix }));
  } else if (options.prefixer) {
    processor.use(prefixer(options.prefixer));
  }

  processor
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
  buildStyles,
};
