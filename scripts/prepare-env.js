#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");
const theme = process.argv.slice(2)[0] || "default";
const themes = ["default", "ucpkn", "joinup"];
const issue = process.argv.slice(2)[1] || false;
const root = path.resolve(__dirname, "../");

if (!themes.includes(theme)) {
  console.log(
    `It appears that you are setting up an environment for a theme that doesn't exist`
  );
}

if (issue) {
  let args = ["checkout", "-b", `${issue}-#${theme}#`];
  const createBranch = spawn("git", args, {
    stdio: "inherit",
    cwd: root,
    shell: true,
  });
  createBranch.on("error", (err) => console.log(err.message));
  createBranch.on("exit", () => {
    console.log(`Created and checked out a new branch ${issue}-#${theme}#`);
  });

  args = ["commit", "--allow-empty", "--no-verify", "-m", `${issue}-#${theme}`];
  const createCommit = spawn("git", args, {
    stdio: "inherit",
    cwd: root,
    shell: true,
  });
  createCommit.on("error", (err) => console.log(err.message));
  createCommit.on("exit", () => {
    console.log(`Created an empty commit in the branch ${issue}-#${theme}#`);
  });

  const pushBranch = spawn(
    "git",
    ["push", "--set-upstream", `origin ${issue}-#${theme}#`],
    { stdio: "inherit", cwd: root, shell: true }
  );
  pushBranch.on("error", (err) => console.log(err.message));
  pushBranch.on("exit", () => {
    console.log(`Your new branch has been pushed.`);
  });
} else {
  console.error(
    "To prepare your env you need to specifiy a theme and a jira issue"
  );
}
