/**
 * Compile and bundle js files.
 *
 * @param {string} input - Path to a folder or file.
 * @param {string} dest - String to prefix, suffix or replace the current file name.
 * @param {object} options - Object
 *
 * Example config object: {
 *
 * scripts: [
 *   {
 *     entry: path.resolve(__dirname, "src/js/index.esm.js"),
 *     dest: path.resolve(outputFolder, "js/oe-bcl-default.esm.js"),
 *     options: {
 *       format: "esm",
 *       globals: { "@popperjs/core": "Popper" },
 *       minify: true,
 *       sourceMap: true,
 *       minifyOptions: {
 *         mangle: true,
 *         format: {
 *           comments: /^!/,
 *         },
 *         compress: {
 *           passes: 2,
 *         },
 *       },
 *       external: ["@popperjs/core"],
 *     },
 *   },
 * ],
 */

const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const babelPresetEnv = require("@babel/preset-env");
const rollup = require("rollup");
const { terser } = require("rollup-plugin-terser");

module.exports = (input, dest, options) => {
  const plugins = [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    nodeResolve(),
  ];

  const minifyOptions = options.minifyOptions || {};

  const inputOptions = {
    input,
    external: options.external || [],
    plugins: options.plugins ? options.plugins.concat(plugins) : plugins,
  };

  const outputOptions = {
    file: dest,
    format: options.format || "umd",
    name: options.name || "",
    sourcemap: options.sourceMap || "",
    globals: options.globals || {},
    plugins: options.terser ? [terser(minifyOptions)] : [],
  };

  const minifiedOptions = {
    file: `${dest.slice(0, -3)}.min.js`,
    format: options.format || "umd",
    name: options.name || "",
    sourcemap: options.sourceMap || "",
    plugins: [terser(minifyOptions)],
  };

  async function build() {
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    if (options.minify) {
      await bundle.write(minifiedOptions);
    }
    await bundle.close();
  }

  build();
};
