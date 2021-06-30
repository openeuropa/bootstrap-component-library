const path = require("path");
const pkg = require("./package.json");
const rootPkg = require("../../../package.json");

const outputFolder = path.resolve(__dirname);
const nodeModules = path.resolve(__dirname, "../../../node_modules");

// SCSS includePaths
const includePaths = [nodeModules];

const { apps } = rootPkg;

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-ecl.bundle.min.js"),
      options: {
        moduleName: "bootstrap",
        external: ["@popperjs/core"],
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(outputFolder, "oe-bcl-ecl.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-ecl.min.css"),
      options: {
        includePaths,
        sourceMap: "file",
      },
    },
  ],
  copy: [
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
        path.resolve(nodeModules, "@openeuropa/bcl-twig-templates/**/*.twig"),
      ],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 6 },
    },
  ],
};
