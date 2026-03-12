const fs = require("fs");
const path = require("path");
const replace = require("@rollup/plugin-replace");
const iconList = require("./src/icons/icons");
const customIconList = require("./src/icons/custom-icons");

const resolvePackagePath = (packageName, ...segments) => {
  let packageRoot;

  try {
    packageRoot = path.dirname(
      require.resolve(`${packageName}/package.json`, { paths: [__dirname] }),
    );
  } catch (error) {
    if (error.code !== "ERR_PACKAGE_PATH_NOT_EXPORTED") {
      throw error;
    }

    let currentPath = fs.realpathSync(
      require.resolve(packageName, { paths: [__dirname] }),
    );

    while (!packageRoot) {
      currentPath = path.dirname(currentPath);

      if (fs.existsSync(path.resolve(currentPath, "package.json"))) {
        packageRoot = currentPath;
      }
    }
  }

  return path.resolve(packageRoot, ...segments);
};

const outputFolder = path.resolve(__dirname);
const repoRoot = path.resolve(__dirname, "../../../");
const nodeModules = path.resolve(__dirname, "../../../node_modules");
const bootstrapIconsPath = resolvePackagePath("bootstrap-icons");
const twigTemplatesPath = resolvePackagePath("@openeuropa/bcl-twig-templates");
const resourcesFlagIconsPath = resolvePackagePath("@ecl/resources-flag-icons");
const resourcesEcLogoPath = resolvePackagePath("@ecl/resources-ec-logo");
const resourcesEuLogoPath = resolvePackagePath("@ecl/resources-eu-logo");
const slimSelectPath = resolvePackagePath("slim-select");
const slimSelect2Path = resolvePackagePath("slim-select-2");
const flagIconsPath = resolvePackagePath("flag-icons");
const bootstrapReplaceIconsPath = path.resolve(
  repoRoot,
  "bootstrap/replace-icons",
);

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
  colorScheme: [
    {
      entry: path.resolve(outputFolder, "src/scss/color-scheme-variables.scss"),
      dest: path.resolve(outputFolder, "css/color-scheme.min.css"),
      options: {
        includePaths,
        minify: true,
        sourceMap: "file",
        silenceDeprecations: [
          "legacy-js-api",
          "import",
          "color-functions",
          "if-function",
          "global-builtin",
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
        silenceDeprecations: [
          "legacy-js-api",
          "import",
          "color-functions",
          "if-function",
          "global-builtin",
        ],
      },
    },
    {
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-default.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-ckeditor5.min.css"),
      options: {
        prefixer: {
          prefix: ".ck-content",
        },
        includePaths,
        sourceMap: "file",
        minify: true,
        silenceDeprecations: [
          "legacy-js-api",
          "import",
          "color-functions",
          "if-function",
          "global-builtin",
        ],
      },
    },
    {
      entry: path.resolve(outputFolder, "src/scss/oe-bcl-default.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-default.min.css"),
      options: {
        includePaths,
        sourceMap: "file",
        minify: true,
        silenceDeprecations: [
          "legacy-js-api",
          "import",
          "color-functions",
          "if-function",
          "global-builtin",
        ],
      },
    },
  ],
  sprite: [
    {
      entry: [
        bootstrapReplaceIconsPath,
        path.resolve(bootstrapIconsPath, "icons"),
        path.resolve(__dirname, "src/icons/custom-icons"),
      ],
      dest: path.resolve(outputFolder, "icons/"),
      options: {
        list: [iconList, customIconList],
      },
    },
  ],
  copy: [
    {
      from: [path.resolve(slimSelectPath, "dist/slimselect.min.js")],
      to: path.resolve(outputFolder, "js"),
      options: { up: true },
    },
    {
      from: [path.resolve(slimSelect2Path, "dist/slimselect.min.js")],
      to: path.resolve(outputFolder, "js/slim-select-2"),
      options: { up: true },
    },
    {
      from: [path.resolve(bootstrapIconsPath, "bootstrap-icons.svg")],
      to: path.resolve(outputFolder, "icons"),
      options: { up: true },
    },
    {
      from: [
        path.resolve(resourcesFlagIconsPath, "dist/sprites/icons-flag.svg"),
      ],
      to: path.resolve(outputFolder, "icons"),
      options: { up: true },
    },
    {
      from: [path.resolve(flagIconsPath, "flags/**/*.svg")],
      to: path.resolve(outputFolder, "icons/world-flags"),
      options: { up: 6 },
    },
    {
      from: [path.resolve(resourcesEcLogoPath, "**/*.svg")],
      to: path.resolve(outputFolder, "logos/ec"),
      options: { up: 7 },
    },
    {
      from: [path.resolve(resourcesEuLogoPath, "**/*.svg")],
      to: path.resolve(outputFolder, "logos/eu"),
      options: { up: 7 },
    },
    {
      from: [path.resolve(twigTemplatesPath, "templates/**/*.twig")],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 7 },
    },
  ],
};
