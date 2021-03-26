import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-alert/data";

const template = "@oe/alert/alert.html.twig";
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
];

describe("OE - Alert", () => {
  test(`renders correctly without close button`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, dismissible: false })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly without animation for the close button`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, animated_dismiss: false })
    ).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });
});
