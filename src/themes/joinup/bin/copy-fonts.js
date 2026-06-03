#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const outputDir = path.resolve(__dirname, "..", "fonts");

const resolvePackagePath = (packageName) => {
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

  return fs.realpathSync(packageRoot);
};

const robotoPath = resolvePackagePath("@fontsource/roboto");
const cssPattern = /^(?:lat|cyr|gree).+-(?:400|500|700).*\.css$/;
const fontPattern =
  /^roboto-(?:latin.*|cyrillic|greek)-(?:400|500|700)-.+\.woff2?$/;

fs.mkdirSync(path.join(outputDir, "files"), { recursive: true });

let copiedFiles = 0;

for (const fileName of fs.readdirSync(robotoPath)) {
  if (!cssPattern.test(fileName)) {
    continue;
  }

  fs.copyFileSync(
    path.join(robotoPath, fileName),
    path.join(outputDir, fileName),
  );
  copiedFiles += 1;
}

for (const fileName of fs.readdirSync(path.join(robotoPath, "files"))) {
  if (!fontPattern.test(fileName)) {
    continue;
  }

  fs.copyFileSync(
    path.join(robotoPath, "files", fileName),
    path.join(outputDir, "files", fileName),
  );
  copiedFiles += 1;
}

if (copiedFiles === 0) {
  throw new Error("No Roboto font files were copied.");
}

console.log(`Copied ${copiedFiles} Roboto font files.`);
