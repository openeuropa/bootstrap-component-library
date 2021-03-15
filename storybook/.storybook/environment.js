const path = require("path");
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");

const oeAbsPath = path.resolve(__dirname, "../../src/components");
const loader = new TwingLoaderFilesystem(oeAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === "function") {
  // Add namespace oe.
  loader.addPath(ecAbsPath, "oe");
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
