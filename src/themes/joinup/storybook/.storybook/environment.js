const path = require("path");
const {
  TwingEnvironment,
  TwingLoaderFilesystem,
  TwingFunction,
} = require("twing");
const drupalAttribute = require("drupal-attribute");

const oeAbsPath = path.resolve(__dirname, "../../../..//components");
const projAbsPath = path.resolve(__dirname, "../custom-templates");
const loader = new TwingLoaderFilesystem(oeAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === "function") {
  // Add namespace oe.
  loader.addPath(oeAbsPath, "oe-bcl");
}

const createAttribute = new TwingFunction("create_attribute", function () {
  return new drupalAttribute();
});

const environment = new TwingEnvironment(loader, { autoescape: false });
environment.addFunction(createAttribute);

module.exports = environment;
