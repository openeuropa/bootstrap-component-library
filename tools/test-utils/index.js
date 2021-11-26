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

const getVariants = (outline, add) => {
  let variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  if (outline) {
    variants = [...variants, ...variants.map((el) => `outline-${el}`)];
  }
  if (add) {
    variants = [...variants, ...add];
  }

  return variants;
};

module.exports = {
  merge,
  renderTwigFileAsNode,
  getVariants,
};
