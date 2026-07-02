#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const packageDir = path.resolve(__dirname, "..");
const destinationDir = path.join(packageDir, "templates");
const packageJson = require(path.join(packageDir, "package.json"));

const findWorkspaceRoot = (startDir) => {
  let currentDir = startDir;

  while (currentDir !== path.dirname(currentDir)) {
    if (fs.existsSync(path.join(currentDir, "pnpm-workspace.yaml"))) {
      return currentDir;
    }

    currentDir = path.dirname(currentDir);
  }

  return null;
};

const findWorkspacePackageDir = (workspaceRoot, packageName) => {
  if (!workspaceRoot) {
    return null;
  }

  const searchRoots = [
    path.join(workspaceRoot, "src", "components"),
    path.join(workspaceRoot, "src", "compositions"),
  ];

  for (const searchRoot of searchRoots) {
    if (!fs.existsSync(searchRoot)) {
      continue;
    }

    for (const entry of fs.readdirSync(searchRoot, { withFileTypes: true })) {
      if (!entry.isDirectory()) {
        continue;
      }

      const candidateDir = path.join(searchRoot, entry.name);
      const candidatePackageJson = path.join(candidateDir, "package.json");

      if (!fs.existsSync(candidatePackageJson)) {
        continue;
      }

      const candidatePackage = JSON.parse(
        fs.readFileSync(candidatePackageJson, "utf8"),
      );

      if (candidatePackage.name === packageName) {
        return candidateDir;
      }
    }
  }

  return null;
};

const resolvePackageDir = (packageName, workspaceRoot) => {
  try {
    return path.dirname(
      require.resolve(`${packageName}/package.json`, {
        paths: [packageDir],
      }),
    );
  } catch {
    return findWorkspacePackageDir(workspaceRoot, packageName);
  }
};

const copyTwigFiles = (sourceDir, packageName) => {
  const twigFiles = fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".twig"))
    .map((entry) => entry.name);

  if (twigFiles.length === 0) {
    return 0;
  }

  const packageDestinationDir = path.join(
    destinationDir,
    packageName.replace("@openeuropa/", ""),
  );

  fs.mkdirSync(packageDestinationDir, { recursive: true });

  for (const twigFile of twigFiles) {
    fs.copyFileSync(
      path.join(sourceDir, twigFile),
      path.join(packageDestinationDir, twigFile),
    );
  }

  return twigFiles.length;
};

const workspaceRoot = findWorkspaceRoot(packageDir);
const dependencies = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

let copiedFiles = 0;

for (const packageName of Object.keys(dependencies).sort()) {
  if (
    !packageName.startsWith("@openeuropa/bcl-") ||
    packageName === packageJson.name
  ) {
    continue;
  }

  const sourceDir = resolvePackageDir(packageName, workspaceRoot);

  if (!sourceDir) {
    continue;
  }

  copiedFiles += copyTwigFiles(sourceDir, packageName);
}

if (copiedFiles === 0) {
  throw new Error("No Twig templates were copied.");
}

console.log(`Copied ${copiedFiles} Twig templates.`);
