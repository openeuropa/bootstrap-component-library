const path = require("path");
const { getDummyText } = require("@openeuropa/bcl-data-utils");
const {
  TwingEnvironment,
  TwingLoaderFilesystem,
  TwingFunction,
} = require("twing");
const drupalAttribute = require("drupal-attribute");

const projComponentsAbsPath = path.resolve(__dirname, "../src/components");
const projCompositionsAbsPath = path.resolve(__dirname, "../src/compositions");
const loader = new TwingLoaderFilesystem(projComponentsAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === "function") {
  // Add namespace oe.
  loader.addPath(projComponentsAbsPath, "oe-bcl");
  loader.addPath(projCompositionsAbsPath, "oe-bcl");
}

const createAttribute = new TwingFunction("create_attribute", function () {
  return new drupalAttribute();
});

const dummyText = new TwingFunction("get_dummy_text", function (count, paragraph, paragraphs, classes) {
  return getDummyText(count, paragraph, paragraphs, classes);
});

const environment = new TwingEnvironment(loader, { autoescape: false });
environment.addFunction(createAttribute);
environment.addFunction(dummyText);

module.exports = environment;
