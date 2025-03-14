/**
 * Generate svg sprites.
 *
 * @param {string} entry - array of paths to a folder or file.
 * @param {string} dest - Output folder path
 * @param {object} options - Object
 *
 * Example config object: {
 *
 * sprite: [
 *   {
 *     entry: [
 *       path.resolve(nodeModules, "bootstrap-icons/icons/"),
 *       path.resolve(__dirname, "src/icons/custom-icons")
 *     ],
 *     dest: path.resolve(outputFolder, "icons/"),
 *     options: {
 *       file: "bcl-default-icons.svg",
 *       list: myList,
 *       transformPlugins: (array of svgo plugins objects)
 *     },
 *   },
 * ],
 */

const fs = require("fs");
const { globSync } = require("glob");
const mkdirp = require("mkdirp");
const path = require("path");
const defaultPlugins = require("../conf/svgoDefaultPlugins");
const SVGSpriter = require("svg-sprite");

module.exports = (entry, dest, options) => {
  const iconList = Array.isArray(options.list)
    ? options.list.flat(1)
    : options.list;
  const outputFile = options.file
    ? `${dest}/${options.file}`
    : `${dest}/bcl-default-icons.svg`;
  const files = iconList || globSync("*.svg", { cwd: entry });

  const plugins = options.transformPlugins || defaultPlugins;

  const spriter = new SVGSpriter({
    dest,
    shape: {
      transform: [
        {
          svgo: {
            multipass: true,
            plugins: defaultPlugins,
          },
        },
      ],
    },
    svg: {
      namespaceClassnames: false,
      xmlDeclaration: false,
    },
    mode: {
      symbol: {
        dest: "",
        sprite: outputFile,
      },
    },
  });

  files.forEach((file) => {
    let filePath;
    if (Array.isArray(entry)) {
      filePath = path.resolve(entry[0], file);
      if (!fs.existsSync(filePath)) {
        filePath = path.resolve(entry[1], file);
      }
    } else {
      filePath = path.resolve(entry, file);
    }
    spriter.add(
      filePath,
      file,
      fs.readFileSync(filePath, { encoding: "utf-8" }),
    );
  });

  spriter.compile((error, result, data) => {
    Object.keys(result).forEach((mode) => {
      Object.keys(result[mode]).forEach((resource) => {
        mkdirp.sync(path.dirname(result[mode][resource].path));
        fs.writeFileSync(
          result[mode][resource].path,
          result[mode][resource].contents,
        );
      });
    });
  });
};
