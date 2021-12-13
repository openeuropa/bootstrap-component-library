const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');
const SVGSpriter = require('svg-sprite');

module.exports = (entry, dest, options) => {
  const outputFile = options.file ? `${dest}/${options.file}` : `${dest}/'bcl-icons.svg`;
  const files = options.list || glob.sync('*.svg', { cwd: entry });

  const spriter = new SVGSpriter({
    dest,
    shape: {
      transform: [
        {
          svgo: {
            multipass: true,
            plugins: [
              {
                cleanupAttrs: true
              },
              {
                cleanupEnableBackground: true
              },
              {
                cleanupIDs: true
              },
              {
                cleanupListOfValues: true
              },
              {
                cleanupNumericValues: true
              },
              {
                collapseGroups: true
              },
              {
                convertColors: true
              },
              {
                convertPathData: {
                  noSpaceAfterFlags: false
                }
              },
              {
                convertShapeToPath: true
              },
              {
                convertStyleToAttrs: true
              },
              {
                convertTransform: true
              },
              {
                inlineStyles: true
              },
              {
                mergePaths: {
                  noSpaceAfterFlags: false
                }
              },
              {
                minifyStyles: true
              },
              {
                moveElemsAttrsToGroup: true
              },
              {
                moveGroupAttrsToElems: true
              },
              {
                removeAttrs: {
                  attrs: [
                    "data-name",
                    "fill",
                    "clip-rule"
                  ]
                }
              },
              {
                removeComments: true
              },
              {
                removeDesc: true
              },
              {
                removeDoctype: true
              },
              {
                removeEditorsNSData: true
              },
              {
                removeEmptyAttrs: true
              },
              {
                removeEmptyContainers: true
              },
              {
                removeEmptyText: true
              },
              {
                removeHiddenElems: true
              },
              {
                removeMetadata: true
              },
              {
                removeNonInheritableGroupAttrs: true
              },
              {
                removeTitle: true
              },
              {
                removeUnknownsAndDefaults: {
                  keepRoleAttr: true
                }
              },
              {
                removeUnusedNS: true
              },
              {
                removeUselessDefs: true
              },
              {
                removeUselessStrokeAndFill: true
              },
              {
                removeViewBox: false
              },
              {
                removeXMLNS: true
              },
              {
                removeXMLProcInst: true
              },
              {
                sortAttrs: true
              }
            ]
          }
        }
      ],
    },
    svg: {
      namespaceClassnames: false,
      xmlDeclaration: false,
    },
    mode: {
      symbol: {
        dest: '',
        sprite: outputFile,
      },
    },
  });

  files.forEach((file) => {
    const filePath = path.resolve(entry, file);
    spriter.add(
      filePath,
      file,
      fs.readFileSync(filePath, { encoding: 'utf-8' })
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
      });
    });
  });
};
