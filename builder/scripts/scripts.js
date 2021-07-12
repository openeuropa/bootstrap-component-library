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
