const path = require("path");
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");

const ecAbsPath = path.resolve(__dirname, "../../src/components");
const loader = new TwingLoaderFilesystem(ecAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === "function") {
  // Add namespace ecl-twig.
  loader.addPath(ecAbsPath, "oec");
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
