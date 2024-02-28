#!/usr/bin/env node

const { spawn } = require("child_process");
const browsersync = require("browser-sync");
const path = require("path");
const instance = process.argv.slice(3)[0] || "default";
const ports = {
  dev: "5000",
  default: "5001",
  joinup: "5002",
  ucpkn: "5003",
};

const theme = instance === "dev" ? "default" : instance;
const port = ports[instance];

const handlers = [
  {
    pattern: `${path.resolve(__dirname, "..")}/src/themes/*/src/scss/**/*.scss`,
    events: [
      {
        on: "change",
        name: "scss change",
        command: `lerna --scope \"@openeuropa/bcl-theme-${theme}\" run update:styles`,
        message: "New styles ready",
        reload: "*.css",
      },
    ],
  },
  {
    pattern: `${path.resolve(__dirname, "..")}/src/themes/*/src/scss/**/*.scss`,
    events: [
      {
        on: "change",
        name: "scss change",
        command: `lerna --scope \"@openeuropa/bcl-theme-${theme}\" run update:color-schema`,
        message: "New styles ready",
        reload: "*.css",
      },
    ],
  },
  {
    pattern: `${path.resolve(__dirname, "..")}/src/themes/*/src/js/**/*.js`,
    events: [
      {
        on: "change",
        name: "javascript change",
        command: `lerna --scope \"@openeuropa/bcl-theme-${theme}\" run update:scripts`,
        message: "New scripts ready",
        reload: true,
      },
    ],
  },
  {
    pattern: `${path.resolve(
      __dirname,
      ".."
    )}/src/(components|compositions)/*/*.twig`,
    events: [
      {
        on: "change",
        name: "twig template change",
        command: `lerna --scope \"@openeuropa/bcl-theme-${theme}\" run update:templates`,
        message: "New main templates ready",
        reload: true,
      },
    ],
  },
  {
    pattern: `${path.resolve(
      __dirname,
      ".."
    )}/src/themes/*/src/templates/*.twig`,
    events: [
      {
        on: "change",
        name: "twig template override change",
        command: `lerna --scope \"@openeuropa/bcl-theme-${theme}\" run update:templates`,
        message: "New main templates ready",
        reload: true,
      },
    ],
  },
];

const bs = browsersync.create();

handlers.forEach((handler) => {
  bs.watch(handler.pattern, (event, file) => {
    handler.events.forEach((handlerEvent) => {
      const { on, name, command, message, reload } = handlerEvent;
      if (on === event) {
        bs.notify(`${event} ${file}`);
        const args = command.split(" ");
        const cmd = args.shift();
        const subprocess = spawn(cmd, args, { stdio: "inherit" });
        subprocess.on("error", (err) => bs.notify(`${name}: ${err.message}`));
        subprocess.on("exit", () => {
          bs.notify(message);
          if (reload) {
            bs.reload(reload);
          }
        });
      }
    });
  });
});

bs.init({ ...{ open: true, proxy: `localhost:${port}` } });
