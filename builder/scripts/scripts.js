const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const babelPresetEnv = require("@babel/preset-env");
const rollup = require("rollup");

module.exports = (input, dest, options) => {
  const inputOptions = {
    input,
    external: options.external || [],
    plugins: [
      babel({
        // Only transpile our source code
        exclude: "node_modules/**",
        // Include the helpers in the bundle, at most one copy of each
        babelHelpers: "bundled",
      }),
      replace({
        "process.env.NODE_ENV": '"production"',
        preventAssignment: true,
      }),
      nodeResolve(),
    ],
  };

  const outputOptions = {
    file: dest,
    name: options.name || options.moduleName,
    sourcemap: options.sourcemap || options.sourceMap,
    globals: options.globals || {},
  };

  rollup.rollup(inputOptions).then((bundle) => bundle.write(outputOptions));
};
