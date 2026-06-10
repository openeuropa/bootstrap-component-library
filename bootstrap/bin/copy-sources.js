#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

const packageRoot = path.resolve(__dirname, "..");

const resolvePackagePath = (packageName, ...segments) => {
  let packagePath;

  try {
    packagePath = path.dirname(
      require.resolve(`${packageName}/package.json`, { paths: [packageRoot] }),
    );
  } catch (error) {
    if (error.code !== "ERR_PACKAGE_PATH_NOT_EXPORTED") {
      throw error;
    }

    let currentPath = fs.realpathSync(
      require.resolve(packageName, { paths: [packageRoot] }),
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

const copyDirectoryContents = (from, to) => {
  fs.mkdirSync(to, { recursive: true });

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const sourcePath = path.join(from, entry.name);
    const destinationPath = path.join(to, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryContents(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      copyFile(sourcePath, destinationPath);
    }
  }
};

const copySass = () => {
  copyDirectoryContents(
    resolvePackagePath("bootstrap", "scss"),
    path.join(packageRoot, "scss"),
  );
};

const copyJs = () => {
  copyDirectoryContents(
    resolvePackagePath("bootstrap", "js"),
    path.join(packageRoot, "js"),
  );
  copyDirectoryContents(
    path.join(packageRoot, "legacy"),
    path.join(packageRoot, "js/src"),
  );
};

const copyIconSprite = () => {
  copyFile(
    resolvePackagePath("bootstrap-icons", "bootstrap-icons.svg"),
    path.join(packageRoot, "bootstrap-icons.svg"),
  );
};

const copyIconSvgs = () => {
  const iconsDestination = path.join(packageRoot, "icons");

  fs.rmSync(iconsDestination, { recursive: true, force: true });
  copyDirectoryContents(
    resolvePackagePath("bootstrap-icons", "icons"),
    iconsDestination,
  );
};

const copyReplacementIcons = () => {
  copyDirectoryContents(
    path.join(packageRoot, "replace-icons"),
    path.join(packageRoot, "icons"),
  );
};

const tasks = {
  sass: copySass,
  js: copyJs,
  "icon-sprite": copyIconSprite,
  "icon-svgs": copyIconSvgs,
  "replacement-icons": copyReplacementIcons,
};

const taskName = process.argv[2];

if (!tasks[taskName]) {
  console.error(
    `Usage: node bin/copy-sources.js ${Object.keys(tasks).join("|")}`,
  );
  process.exit(1);
}

tasks[taskName]();
