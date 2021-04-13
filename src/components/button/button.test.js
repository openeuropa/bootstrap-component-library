import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-button/data";

const template = "@oe/button/button.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link"
];
const sizes = [
  "lg",
  "md",
  "sm",
];

describe("OE - Button", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size: size })
      ).resolves.toMatchSnapshot();
    });
  });
});

describe("OE - Button Outline", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant, outline: true })
      ).resolves.toMatchSnapshot();
    });
  });
});
