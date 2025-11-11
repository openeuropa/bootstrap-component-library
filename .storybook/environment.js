const fs = require("fs");
const path = require("path");
const { getDummyText } = require("@openeuropa/bcl-data-utils");
const {
  createEnvironment,
  createFilesystemLoader,
  createFunction,
} = require("twing");
const { StorybookDrupalAttribute } = require("./drupal-attribute");

const projComponentsAbsPath = path.resolve(__dirname, "../src/components");
const projCompositionsAbsPath = path.resolve(__dirname, "../src/compositions");

let environment;

try {
  const loader = createFilesystemLoader(fs);

  loader.addPath(projComponentsAbsPath);
  loader.addPath(projCompositionsAbsPath);
  loader.addPath(projComponentsAbsPath, "@oe-bcl");
  loader.addPath(projCompositionsAbsPath, "@oe-bcl");

  const createAttribute = createFunction(
    "create_attribute",
    () => Promise.resolve(new StorybookDrupalAttribute()),
    [],
  );

  const dummyText = createFunction(
    "get_dummy_text",
    (_context, count = 1, paragraph = false, paragraphs = false, classes = "") =>
      Promise.resolve(
        getDummyText(count, paragraph, paragraphs, classes),
      ),
    [
      { name: "count", defaultValue: 1 },
      { name: "paragraph", defaultValue: false },
      { name: "paragraphs", defaultValue: false },
      { name: "classes", defaultValue: "" },
    ],
  );

  environment = createEnvironment(loader, {
    autoEscapingStrategy: null,
  });

  environment.addFunction(createAttribute);
  environment.addFunction(dummyText);
} catch (error) {
  environment = {
    render() {
      throw new Error(
        "Twing environment is not available in the current runtime.",
      );
    },
  };
}

module.exports = environment;
