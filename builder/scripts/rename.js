/**
 * Rename files.
 *
 * @param {string} from - Path to a folder or file.
 * @param {string} to - String to prefix, suffix or replace the current file name.
 * @param {object} options - Options available:
 *                              search: (string) the glob to find the files in the "from"
 *                              glob: (glob) The glob to be added as a segment in the "from"
 *                              operation: (string) Available options:
 *                                prefix (string), suffix (String), rewrite (String),
 *                                extension (boolean), newExtension (string)
 * Example config object: {
 *  rename: [
 *   {
 *     from: path.resolve(outputFolder, "templates"),
 *     to: "bcl-",
 *       options: {
 *         search: "*.twig",
 *         operation: "prefix",
 *      },
 *   }
 *  ]
 */

const path = require("path");
const glob = require("glob");
const { rename } = require("fs");

module.exports = (from, to, options) => {
  const executor = async () => {
    let files = false;

    if (options.glob) {
      if (options.search) {
        files = glob.sync(path.join(from, options.glob, options.search));
      } else {
        files = glob.sync(path.join(from, options.glob));
      }
    } else {
      if (options.search) {
        files = glob.sync(path.join(from, options.search));
      } else {
        files = glob.sync(from);
      }
    }

    if (files[0]) {
      files.forEach(async (file) => {
        const fileName = path.basename(file);
        const folder = path.dirname(file);
        let newFileName = fileName;

        if (!options.operation) {
          options.operation = "prefix";
        }

        switch (options.operation) {
          case "prefix":
            newFileName = `${to}${fileName}`;
            break;

          case "suffix":
            newFileName = `${fileName}${to}`;
            break;

          case "rewrite":
            newFileName = to;
            break;

          case "extension":
            const currentExtension = fileName.substring(fileName.indexOf("."));
            const withoutExtension = fileName.replace(currentExtension, "");
            const newExtension = options.newExtension || currentExtension;
            newFileName = `${withoutExtension}${newExtension}`;
            break;

          default:
            console.error("The requested operation was not recognized");
        }

        const newFile = `${folder}/${newFileName}`;

        await rename(file, newFile, function (err) {
          if (err) console.error(err);
        });
      });
    } else {
      console.error("We couldn't find the file(s) you wanted to rename");
    }
  };

  executor();
};
