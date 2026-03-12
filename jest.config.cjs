const path = require("path");
const { globSync } = require("glob");

const { workspaces } = require("./package.json");

const workspacePatterns = workspaces.packages.map(
  (workspacePattern) => `${workspacePattern}/package.json`,
);

const workspacePackageJsonFiles = globSync(workspacePatterns, {
  cwd: __dirname,
});

const moduleNameMapper = Object.fromEntries(
  workspacePackageJsonFiles.flatMap((workspacePackageJsonFile) => {
    const workspacePackageJsonPath = path.resolve(
      __dirname,
      workspacePackageJsonFile,
    );
    const { name } = require(workspacePackageJsonPath);
    const workspaceDir = path
      .dirname(workspacePackageJsonFile)
      .replaceAll(path.sep, "/");
    const escapedName = escapeRegex(name);

    return [
      [`^${escapedName}$`, `<rootDir>/${workspaceDir}`],
      [`^${escapedName}/(.*)$`, `<rootDir>/${workspaceDir}/$1`],
    ];
  }),
);

module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper,
};

function escapeRegex(value) {
  return value.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
}
