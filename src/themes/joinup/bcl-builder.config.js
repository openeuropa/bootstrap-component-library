const path = require("path");
const replace = require("@rollup/plugin-replace");
const templates = require("./custom-templates/bcl-templates");

const outputFolder = path.resolve(__dirname);
const nodeModules = path.resolve(__dirname, "../../../node_modules");

// SCSS includePaths
const includePaths = [nodeModules];
const excludePaths = [];
if (templates.length) {
  templates.forEach((template) => {
    excludePaths.push(
      path.resolve(
        nodeModules,
        `@openeuropa/bcl-twig-templates/templates/**/${template}.html.twig`
      )
    );
  });
}

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "index.esm.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-joinup.esm.js"),
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
      entry: path.resolve(__dirname, "index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-joinup.umd.js"),
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
      entry: path.resolve(__dirname, "index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-joinup.bundle.js"),
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
      entry: path.resolve(outputFolder, "oe-bcl-joinup.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-joinup.css"),
      options: {
        includePaths,
        sourceMap: "file",
      },
    },
    {
      entry: path.resolve(outputFolder, "oe-bcl-joinup.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-joinup.min.css"),
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
        path.resolve(
          nodeModules,
          "@openeuropa/bcl-twig-templates/templates/**/*.twig"
        ),
      ],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 9, exclude: excludePaths },
    },
    {
      from: ["custom-templates/**/*.twig"],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 1 },
    },
  ],
};
