const merge = require("deepmerge");
const twing = require("../../.storybook/environment");
const drupalAttribute = require("drupal-attribute");

const renderTwigFileAsNode = (file, options, reset) =>
  new Promise((resolve, reject) => {
    if (reset) {
      options.attributes = new drupalAttribute();
    }
    try {
      const html = twing.render(file, options);
      const jest = document.createElement("jest");
      jest.innerHTML = html.trim();
      resolve(jest);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
};
