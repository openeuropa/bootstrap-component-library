const path = require("path");
const pkg = require("./package.json");
const rootPkg = require("../../../package.json");

const isProd = process.env.NODE_ENV === "production";
const outputFolder = path.resolve(__dirname);

const nodeModules = path.resolve(__dirname, "../../../node_modules");

// SCSS includePaths
const includePaths = [nodeModules];

const { apps } = rootPkg;

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "src/ec.js"),
      dest: path.resolve(outputFolder, "scripts/ecl-ec.js"),
      options: {
        moduleName: "bootstrap",
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, "oe-bcl-default.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-default.css"),
      options: {
        includePaths,
        sourceMap: true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, "@ecl/resources-ec-icons/dist"),
      to: path.resolve(outputFolder, "images/icons"),
    },
    {
      from: path.resolve(nodeModules, "@ecl/resources-social-media-icons/dist"),
      to: path.resolve(outputFolder, "images/icons-social-media"),
    },
    {
      from: path.resolve(nodeModules, "@ecl/resources-flag-icons/dist"),
      to: path.resolve(outputFolder, "images/icons-flag"),
    },
    {
      from: path.resolve(nodeModules, "@ecl/resources-ec-social-icons/dist"),
      to: path.resolve(outputFolder, "images/social-icons"),
    },
    {
      from: path.resolve(nodeModules, "@ecl/resources-ec-logo"),
      to: path.resolve(outputFolder, "images/logo"),
    },
  ],
};
