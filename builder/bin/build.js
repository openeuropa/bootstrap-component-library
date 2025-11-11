#!/usr/bin/env node

const path = require("path");
const { Command } = require("commander"); // Updated import
const buildScript = require("../scripts/scripts");
const browserslist = require("browserslist");
const { buildStyles } = require("../scripts/styles");
const { buildColorScheme } = require("../scripts/colorScheme");
const rename = require("../scripts/rename");
const copyFiles = require("../scripts/copy");
const makeSprite = require("../scripts/sprite");
const pkg = require("../package.json");

const loadConfig = (configFile) => {
  const conf = configFile || "bcl-builder.config.js";
  return require(path.resolve(process.cwd(), conf));
};

const program = new Command(); // Initialize a new Command instance

program
  .version(pkg.version)
  .usage("bcl-builder [command] [option]")
  .option(
    "-c, --config [config_file]",
    "config file (default: bcl-builder.config.js)",
  );

program
  .command("browsers")
  .description("get browserslist stats")
  .action(() => {
    const browsers = browserslist();
    const coverage = browserslist.coverage(browsers, "alt-eu");
    console.log(`
---- Browsers stats ----
Supported browsers: ${browsers.join(" ")}
These browsers account for ${coverage}% of all users in Europe
------------------------
`);
  });

program
  .command("scripts")
  .description("compile JS")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.scripts.forEach((conf) =>
      buildScript(conf.entry, conf.dest, conf.options),
    );
  });

program
  .command("styles")
  .description("compile SCSS to CSS")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.styles.forEach((conf) =>
      buildStyles(conf.entry, conf.dest, conf.options),
    );
  });

program
  .command("color-scheme")
  .description("compile Color scheme SCSS to CSS")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.colorScheme.forEach((conf) =>
      buildColorScheme(conf.entry, conf.dest, conf.options),
    );
  });

program
  .command("sprite")
  .description("make svg sprites")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.sprite.forEach((conf) =>
      makeSprite(conf.entry || "**", conf.dest, conf.options),
    );
  });

program
  .command("copy")
  .description("copy static files")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.copy.forEach((conf) =>
      copyFiles(conf.from || "**", conf.to, conf.options),
    );
  });

program
  .command("rename")
  .description("rename files")
  .action(() => {
    const config = loadConfig(program.opts().config);
    config.rename.forEach((conf) => rename(conf.from, conf.to, conf.options));
  });

if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parse(process.argv);
}
