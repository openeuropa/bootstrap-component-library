const path = require("path");
const replace = require("@rollup/plugin-replace");

const outputFolder = path.resolve(__dirname);
const nodeModules = "../../../node_modules";

// SCSS includePaths
const includePaths = [nodeModules];

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "src/js/index.esm.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-default.esm.js"),
      options: {
        format: "esm",
        globals: { "@popperjs/core": "Popper" },
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
        external: ["@popperjs/core"],
      },
    },
    {
      entry: path.resolve(__dirname, "src/js/index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-default.umd.js"),
      options: {
        name: "bootstrap",
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
      },
    },
    {
      entry: path.resolve(__dirname, "src/js/index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-default.bundle.js"),
      options: {
        name: "bootstrap",
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": '"production"',
            preventAssignment: true,
          }),
        ],
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-default.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-default.css"),
      options: {
        includePaths,
        sourceMap: "file",
      },
    },
    {
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-default.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-default.min.css"),
      options: {
        includePaths,
        sourceMap: "file",
        minify: true,
      },
    },
  ],
  copy: [
    {
      from: [path.resolve(nodeModules, "slim-select/dist/slimselect.min.js")],
      to: path.resolve(outputFolder, "js"),
      options: { up: true },
    },
    {
      from: [
        path.resolve(
          nodeModules,
          "@openeuropa/bcl-bootstrap/bootstrap-icons.svg"
        ),
      ],
      to: path.resolve(outputFolder, "icons"),
      options: { up: true },
    },
    {
      from: [
        `${nodeModules}/@openeuropa/bcl-twig-templates/templates/**/*.twig`,
      ],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 7 },
    },
  ],
};
