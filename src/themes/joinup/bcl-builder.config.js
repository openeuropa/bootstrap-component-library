const path = require("path");
const replace = require("@rollup/plugin-replace");
const iconList = require("@openeuropa/bcl-theme-default/src/icons/icons");
const templates = require("./src/templates/bcl-templates");

const outputFolder = path.resolve(__dirname);
const nodeModules = "../../../node_modules";

// SCSS includePaths
const includePaths = [nodeModules];
const excludePaths = [];
if (templates.length) {
  templates.forEach((template) => {
    excludePaths.push(
      `${nodeModules}/@openeuropa/bcl-twig-templates/templates/bcl-${template}/*.html.twig`
    );
  });
}

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "src/js/index.esm.js"),
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
      entry: path.resolve(__dirname, "src/js/index.umd.js"),
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
      entry: path.resolve(__dirname, "src/js/index.umd.js"),
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
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-joinup.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-joinup.css"),
      options: {
        includePaths,
        sourceMap: "file",
      },
    },
    {
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-joinup.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-joinup.min.css"),
      options: {
        includePaths,
        sourceMap: "file",
        minify: true,
      },
    },
  ],
  sprite: [
    {
      entry: path.resolve(nodeModules, "@openeuropa/bcl-bootstrap/icons"),
      dest: path.resolve(outputFolder, "icons/"),
      options: {
        list: iconList,
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
          "@ecl/resources-flag-icons/dist/sprites/icons-flag.svg"
        ),
      ],
      to: path.resolve(outputFolder, "icons"),
      options: { up: true },
    },
    {
      from: [path.resolve(nodeModules, "svg-country-flags/svg/*.svg")],
      to: path.resolve(outputFolder, "icons/world-flags"),
      options: { up: true },
    },
    {
      from: [`${nodeModules}/@ecl/resources-ec-logo/**/*.svg`],
      to: path.resolve(outputFolder, "logos/ec"),
      options: { up: 6 },
    },
    {
      from: [`${nodeModules}/@ecl/resources-eu-logo/**/*.svg`],
      to: path.resolve(outputFolder, "logos/eu"),
      options: { up: 6 },
    },
    {
      from: [
        `${nodeModules}/@openeuropa/bcl-twig-templates/templates/**/*.twig`,
      ],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 7, exclude: excludePaths },
    },
    {
      from: ["src/templates/**/*.twig"],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 2 },
    },
  ],
};
