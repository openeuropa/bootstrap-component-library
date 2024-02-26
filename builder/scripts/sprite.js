const fs = require("fs");
const { globSync } = require("glob");
const mkdirp = require("mkdirp");
const path = require("path");
const defaultPlugins = require("../conf/svgoDefaultPlugins");
const SVGSpriter = require("svg-sprite");

let svgMarkup;

const addSvgMarkup = (filePath) => {
  const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
  svgMarkup = svgMarkup += "</svg>"; // Closing svg tag.
  const updatedContents = fileContents.replace("</svg>", svgMarkup);
  fs.writeFileSync(filePath, updatedContents);
};

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
  let svgYPosition = 0;
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
    const id = path.basename(file, path.extname(file)); // Extracting file name without extension as id
    svgMarkup =
      svgMarkup += `<view id="${id}-view" viewBox="0 ${svgYPosition} 16 16"/><use xlink:href="#${id}" width="16" height="16" x="0" y="${svgYPosition}" id="${id}-use"/>`;
    svgYPosition = svgYPosition + 16;
    spriter.add(
      filePath,
      file,
      fs.readFileSync(filePath, { encoding: "utf-8" })
    );
  });

  spriter.compile((error, result, data) => {
    Object.keys(result).forEach((mode) => {
      Object.keys(result[mode]).forEach((resource) => {
        mkdirp.sync(path.dirname(result[mode][resource].path));
        fs.writeFileSync(
          result[mode][resource].path,
          result[mode][resource].contents
        );
        const outputPath = result[mode][resource].path;
        addSvgMarkup(outputPath);
      });
    });
  });
};
