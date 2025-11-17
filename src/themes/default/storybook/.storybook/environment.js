const fs = require("fs");
const path = require("path");
const { getDummyText } = require("@openeuropa/bcl-data-utils");
const {
  createEnvironment,
  createFilesystemLoader,
  createFunction,
} = require("twing");
const { StorybookDrupalAttribute } = require("../../../../../.storybook/drupal-attribute");

const componentsPath = path.resolve(__dirname, "../../../components");
const compositionsPath = path.resolve(__dirname, "../../../compositions");
const templatesPath = path.resolve(__dirname, "../../templates");

let environment;

try {
  const loader = createFilesystemLoader(fs);

  loader.addPath(templatesPath);
  loader.addPath(componentsPath);
  loader.addPath(compositionsPath);
  loader.addPath(templatesPath, "@oe-bcl");
  loader.addPath(componentsPath, "@oe_components");
  loader.addPath(compositionsPath, "@oe_compositions");

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
