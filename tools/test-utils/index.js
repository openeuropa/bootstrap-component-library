const twing = require("../../.storybook/environment");
const { DrupalAttribute } = require("drupal-attribute");

const renderTwigFileAsNode = async (file, options = {}, reset) => {
  const localOptions = { ...options };

  if (reset) {
    localOptions.attributes = new DrupalAttribute();
  }

  const html = await twing.render(file, localOptions);
  const jest = document.createElement("jest");
  jest.innerHTML = html.trim();

  return jest;
};

const renderTwigFileAsHtml = async (file, options = {}, main) => {
  const html = await twing.render(file, options);

  if (!main) {
    return html;
  }

  const landmark = document.createElement("main");
  landmark.innerHTML = html.trim();

  return landmark;
};

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
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  getVariants,
};
