#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const assetsDir = path.join(repoRoot, "assets");

const resolvePackagePath = (packageName, ...segments) => {
  let packagePath;

  try {
    packagePath = path.dirname(
      require.resolve(`${packageName}/package.json`, { paths: [repoRoot] }),
    );
  } catch (error) {
    if (error.code !== "ERR_PACKAGE_PATH_NOT_EXPORTED") {
      throw error;
    }

    let currentPath = fs.realpathSync(
      require.resolve(packageName, { paths: [repoRoot] }),
    );

    while (!packagePath) {
      currentPath = path.dirname(currentPath);

      if (fs.existsSync(path.resolve(currentPath, "package.json"))) {
        packagePath = currentPath;
      }
    }
  }

  return path.resolve(fs.realpathSync(packagePath), ...segments);
};

const copyFile = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
};

const walkFiles = function* (directory) {
  if (!fs.existsSync(directory)) {
    return;
  }

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      yield* walkFiles(entryPath);
    } else if (entry.isFile()) {
      yield entryPath;
    }
  }
};

const copyThemeAssets = () => {
  const themesDir = path.join(repoRoot, "src/themes");

  for (const filePath of walkFiles(themesDir)) {
    if (!path.basename(filePath).includes("min.")) {
      continue;
    }

    copyFile(filePath, path.join(assetsDir, path.basename(filePath)));
  }
};

const copySlimSelect = () => {
  copyFile(
    resolvePackagePath("slim-select", "dist/slimselect.js"),
    path.join(assetsDir, "slimselect.min.js"),
  );
};

const copyStaticAssets = () => {
  for (const filePath of walkFiles(path.join(repoRoot, "static"))) {
    copyFile(filePath, path.join(assetsDir, path.basename(filePath)));
  }
};

const copyFonts = () => {
  const themesDir = path.join(repoRoot, "src/themes");

  for (const themeName of fs.readdirSync(themesDir)) {
    const fontsDir = path.join(themesDir, themeName, "fonts");

    for (const filePath of walkFiles(fontsDir)) {
      const relativePath = path.relative(fontsDir, filePath);
      copyFile(filePath, path.join(assetsDir, "fonts", relativePath));
    }
  }
};

copyThemeAssets();
copySlimSelect();
copyStaticAssets();
copyFonts();
