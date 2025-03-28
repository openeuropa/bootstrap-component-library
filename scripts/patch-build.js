#!/usr/bin/env node

const { spawn } = require("child_process");
const theme = process.argv.slice(2)[0] || "default";
const branch = process.argv.slice(2)[1] || "master";
const token = process.argv.slice(2)[2] || "";

const args = [
  "--ci",
  "--force-rebuild",
  `--project-token=${token}`,
  `--patch-build ${branch}...development`,
];

const buildPatch = spawn("yarn", args, { stdio: "inherit" });

buildPatch.on("error", (err) => console.log(err.message));
buildPatch.on("exit", () => {
  console.log(
    `Build patch process ended for the ${theme} styleguide on the ${branch} branch`,
  );
});
